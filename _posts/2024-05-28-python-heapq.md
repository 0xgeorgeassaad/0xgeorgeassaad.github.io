---
layout: post
title: "Reimplementing python's heapq module"
date: 2024-05-28
summary: "Reimplementing python's heapq module using pure python."
tags: ["code"]
---

### Difference between Priority Queue and Heap

It's important to note the difference between Priority Queue and Heap. Priority Queue is an _abstract data-type_ that supports a specified set of operations but can be implemented using various data structures.

A priority queue is similar to a normal queue with the only difference being that the order in which elements are removed from the queue depends on their priority not their time of arrival (addition), and as such, the data inserted into a priority queue must be comparable so that they can be ordered from least to greatest or vice versa.

A priority queue supports the following set of operations:

- `is_empty()`: checks whether the queue has no elements
- `add(elem, prio)`: adds an element with a specified priority to the queue
- `poll()`: removes the element with highest priority from the queue

A priority queue can be implemented using a list, but it will be very inefficient. That's why we will implement it using a heap which is a tree-based data structure that satisfies the heap invariant[^1].

The heap invariant states that the value of the parent node is smaller than the value of its children node (in case of min heap).

### Representation of a Heap

Since a heap is a tree, it can represented using a pointers approach by creating a `node` class with properties `leftChild` and `rightChild`, but there is a much better and simpler representation using a simple list.
So, for any parent at index $i$, we can calculate the indices of children as such:

$$
\begin{aligned}
    \text{Left Child index } &= 2 i+ 1 \\\\
    \text{Right Child index } &= 2 i+ 2 \\\\
\end{aligned}
$$

Here is an example for a heap represented using a list

```python
#    0
#   / \
#  2   3
# / \ / \
# 4 5 6 4
heap = [0,2,3,4,5,6,4]
```

### Turning a Min Heap into a Max Heap

Python's original `heapq` as well as our reimplementation supports only a min heap. So, how can we turn that into a max heap?

Since all elements in the heap implement a comparator interface, we can simply negate the comparator which, in effect, will result in the parent being larger than or equal to its children.

One nice trick can be used when the elements themselves are numbers or when the priority is a number, We simply multiply the number by $-1$ before insertion and then multiply it back by $-1$ after removal.

### Adding elements to the heap

We want to maintain the complete binary tree property to achieve the nice $O(\log(n))$ runtime. We can do this by inserting any new element at the bottom leftmost position and then swimming the element to maintain the heap invariant.

Now, we discuss the sift up algorithm starting at index $i$:

1. Set `k = i` and `parent = (k - 1) // 2`
2. If node is smaller than parent,
   - swap node $k$ with parent
   - set `k = parent` and `parent = (k - 1) // 2`
   - return to step 1
3. else, terminate

```python
# O(log(n))
def heappush(heap, elem):
    heap.append(elem)
    swim(heap, len(heap) - 1)
def swim(heap, k):
    parent = (k - 1) // 2
    while k > 0 and heap[parent] > heap[k]:
        heap[k], heap[parent] = heap[parent], heap[k]
        k = parent
        parent = (k - 1) // 2
```

### Removing elements from the heap

When polling, the root is always located at index $0$.
So, we extract `heap[0]` and swap the root `heap[0]` with the bottom rightmost leaf located at the end of the list `heap[-1]`. Then, to maintain the heap invariant we sink the element location at the root starting at index $0$.

Now, we discuss the sinking algorithm starting at index $i$:

One important note is that when comparing the node with its children and in case of a tie between the left and right node, we always default to the left child.

1. Set `k = i`
2. Set `left = 2*k + 1`, `right = 2*k + 2`
3. Set `smallest = left`
4. if the right element is smaller than the left element
   - Set `smallest = right`
5. if $k$ is $\leq$ $parent$:
   - terminate
6. else,
   - swap node $k$ with smallest
   - set `k = smallest`
   - return to step 2

```python
# O(log(n))
def heappop(heap):
    if len(heap) == 1:
        return heap.pop()
    root = heap[0]
    heap[0], heap[-1] = heap[-1], heap[0]
    heap.pop()
    sink(heap, 0)
    return root
def sink(heap, k):
    while True:
        left = 2 * k + 1
        right = 2 * k + 2
        smallest = left
        if right < len(heap) and heap[right] < heap[left]:
            smallest = right
        if left >= len(heap) or heap[k] <= heap[smallest]:
            break
        heap[k], heap[smallest] = heap[smallest], heap[k]
        k = smallest
```

### Heapifying a list

If we already have an unsorted list and we want to turn it into a heap, the naive approach would be creating a new heap and then `heappush` each element from the list, but that would result in a runtime of $O(n\log(n))$.

There is a more efficient way that runs in a runtime of only $O(n)$.
Now, the heapify algorithm is quite simple, but it's quite hard to prove its runtime.

If you are interested, you can find the proof here[^2].

We start from the last parent (located in the middle of the list) and then sink each parent down.

```python
# O(n)
def heapify(heap):
    for i in range(len(heap) // 2 - 1, -1, -1):
        sink(heap, i)
```

### nlargest (or nsmallest)

Now, imagine we want to get the $k$ largest elements from unsorted list of size $n$.
The naive approach would be to first heapify the list and then pop $k$ elements from the newly built heap, but that would result in a runtime of $O(n)$ to heapify the list and a $O(\log(n))$ for each `heapop` operation resulting in a total runtime of $ O(n+ k\log(n))$ and $O(n)$ memory.

There is another approach which is faster but might not be entirely clear to you at first.
The key is to actually build a heap of only size $k$ and then traverse the rest of the list and only pop the root if the current array element `arr[i]` is larger.
To see why at the end of traversal the heap would contain the $k$ largest elements, assume that the list was sorted. If we take the first $k$ elements and then heapify them, by looking at the $k+1$ element in the list, we immediately see that it's larger than the root of the heap. Then, we pop the root and insert this new element. If we continue in this manner, we will have the $k$ largest elements by the end of the traversal. The last step would be sorting the heap.

Now, Let's see why it's efficient.

- $O(\log(k))$: heapify first $k$ elements from the list
- $O((n-k) \log(k))$: at most we possibly would have to replace root of heap with each single element remaining in the list $(n-k)$ elements. (if the list was sorted)
- $O(k \log(k))$: sort final heap

Thus, the total runtime is $ \log(k) + (n-k) \log(k)+ k \log(k) = (n+1)\log(k) \approx O(n\log(k))$ and $O(k)$ memory.

We see that the second approach is better:

- memory: $O(k) < O(n)$
- time: $O(n\log(k)) < O(n+ k\log(n))$

```python
# O(nlog(k))
def nlargest(arr, k):
    heap = arr[:k]
    heapify(heap)
    for i in range(k, len(arr)):
        if arr[i] > heap[0]:
            heappop(heap)
            heappush(heap, arr[i])
    heap.sort(reverse=True)
    return heap
```

### Congrats!!

Pat yourself on the back! We have just implemented the python's `heapq` module.
During writing, I didn't look at the original source code, but if you are interested, here is the original source code of the `heapq` module[^3].
Just note that the implementation of python would be faster because it uses a byte-compiled version, but nonetheless you can look at the python source code to learn from it.

[^1]: [Heap (data structure) - Wikipedia](<https://en.wikipedia.org/wiki/Heap_(data_structure)>)
[^2]: [Heapify proof](https://www.cs.umd.edu/~meesh/351/mount/lectures/lect14-heapsort-analysis-part.pdf)
[^3]: [Python's heaapq implementation](https://github.com/python/cpython/blob/3.12/Lib/heapq.py)
