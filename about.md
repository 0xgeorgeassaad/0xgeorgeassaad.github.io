---
layout: about
---

I can't think of a good description. So, here is the the Karush–Kuhn–Tucker (KKT) conditions[^1] until I find a good one.

$$
\begin{aligned}
min_{x \in \mathbb{R}^n} \ & f(x) \\
\text{subject to } &  c_i(x) = 0,\quad i \in \mathcal{E} \textit{ (the equality constraints)} \\
& c_i(x) \geq 0,\quad i \in \mathcal{I} \textit{ (the inequality constraints)} \\
\end{aligned}
$$

Suppose that $$x^*$$ is a local solution, that the functions $$f$$ and $$c_i$$ are
continuously differentiable, and that the LICQ holds at $$x^∗$$.

Then there is a Lagrange multiplier vector $$
\lambda^∗$$, such that the following conditions are satisfied at $$(x^∗, \lambda^∗)$$:

$$
\begin{aligned}
\nabla f(x^∗) - \sum_{i \in \mathcal{E} \cup \mathcal{I} } \lambda^*_i \nabla c_i(x^*)  &= 0, \\
c_i(x^*) &= 0,\quad \text{ for all } i \in \mathcal{E} \\
c_i(x^*) &\geq 0,\quad \text{ for all } i \in \mathcal{I} \\
\lambda^*_i &\geq 0,\quad \text{ for all } i \in \mathcal{I} \\
\lambda^*_i c_i(x^*) &= 0,\quad \text{ for all } i \in \mathcal{E} \cup \mathcal{I} \\
\end{aligned}
$$



### Notes

- The photo above is taken in front of The Berlin Victory Column. I highly recommend visiting Berlin.

---

[^1]: Numerical Optimization (Jorge Nocedal and Stephen J. Wright), Springer, 2006.
