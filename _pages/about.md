---
layout: about
title: About
permalink: /
subtitle: I learn by tinkering, and tinker to keep learning.

profile:
  align: right
  image: Me_Berlin.jpeg
  image_circular: false # crops the image to make it circular
  # more_info: >
  #   <p>555 your office number</p>
  #   <p>123 your address street</p>
  #   <p>Your City, State 12345</p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

---

Hi there! I am an aspiring software engineer who loves coding, tinkering with deep learning models, and turning ideas into working software.

You can find my contact info to reach out [down below](#social-section).

I can't think of more to add to the description. So, here is the Karush–Kuhn–Tucker (KKT) conditions[^1] until I find the optimal one.

$$
\begin{aligned}
min_{x \in \mathbb{R}^n} \ & f(x) \\
\text{subject to } &  c_i(x) = 0,\quad i \in \mathcal{E} \textit{ (the equality constraints)} \\
& c_i(x) \geq 0,\quad i \in \mathcal{I} \textit{ (the inequality constraints)} \\
\end{aligned}
$$

Suppose that $x^*$ is a local solution, that the functions $f$ and $c_i$ are
continuously differentiable, and that the LICQ holds at $x^∗$.

Then there is a Lagrange multiplier vector $
\lambda^∗$, such that the following conditions are satisfied at $(x^∗, \lambda^∗)$:

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

- The photo in the [homepage](/) is taken in front of The Berlin Victory Column. I highly recommend visiting Berlin.

[^1]: Numerical Optimization (Jorge Nocedal and Stephen J. Wright), Springer, 2006.
