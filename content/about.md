---
title: "George Assaad" 
hidemeta: true
aliases: 
    - /about.html
---

Hi there! I am an aspiring machine learning (ML) researcher who likes to build robust software.

I graduated summa cum laude with a bachelor's degree in Communications and Information Engineering from [Zewail City of Science and Technology](https://zewailcity.edu.eg/).

Currently, I am studying the AI for science master's program at [AIMS South Africa](https://ai.aims.ac.za/), funded by Google DeepMind.

I hope to join a great Ph.D. program next year :upside_down_face:.


You can find contact info to reach out to me [in the homepage](/).

I can't think of more to add to the description. So, here is the the Karush–Kuhn–Tucker (KKT) conditions[^1] until I find a good one.

$$
\begin{aligned}
min_{x \in \mathbb{R}^n} \ & f(x) \\\\
\text{subject to } &  c_i(x) = 0,\quad i \in \mathcal{E} \textit{ (the equality constraints)} \\\\
& c_i(x) \geq 0,\quad i \in \mathcal{I} \textit{ (the inequality constraints)} \\\\
\end{aligned}
$$

Suppose that $x^*$ is a local solution, that the functions $f$ and $c_i$ are
continuously differentiable, and that the LICQ holds at $x^∗$.

Then there is a Lagrange multiplier vector $
\lambda^∗$, such that the following conditions are satisfied at $(x^∗, \lambda^∗)$:


$$
\begin{aligned}
\nabla f(x^∗) - \sum_{i \in \mathcal{E} \cup \mathcal{I} } \lambda^*_i \nabla c_i(x^\*)  &= 0, \\\\
c_i(x^\*) &= 0,\quad \text{ for all } i \in \mathcal{E} \\\\
c_i(x^\*) &\geq 0,\quad \text{ for all } i \in \mathcal{I} \\\\
\lambda^\*_i &\geq 0,\quad \text{ for all } i \in \mathcal{I} \\\\
\lambda^\*_i c_i(x^\*) &= 0,\quad \text{ for all } i \in \mathcal{E} \cup \mathcal{I} \\\\
\end{aligned}
$$



### Notes

- The photo in the [homepage](/) is taken in front of The Berlin Victory Column. I highly recommend visiting Berlin.


[^1]: Numerical Optimization (Jorge Nocedal and Stephen J. Wright), Springer, 2006.
