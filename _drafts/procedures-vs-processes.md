---
layout: post
title: Procedures vs. Processes
---

*SICP* has a phenomenal [reputation](http://www.cs.berkeley.edu/~bh/sicp.html) for introducing computing concepts the Right Way, and already, in Chapter 1, *SICP* is clarifying a mental model of mine that I hadn't realized was murky: that of the distinction between a *procedure* and a *process*.

A procedure 
These aren't the same thing! As Abelson, Sussman, and Sussman point out in section 1.1.5, there are a number of possible ways a computer could theoretically carry out the same set of instructions.




A procedure, then, is already an abstraction. A procedure isn't the same as the steps that a computer takes to carry out a computation; rather, it's a description of those steps.

The distinction between procedure and process is particularly important when it comes to understanding recursion. A recursive procedure is simply a procedure that refers to itself.

-- example

Any procedure that refers to itself in this way can rightly be called recursive.

There are, however, many different *kinds* of recursive *process*, and this has important repercussions for performance.  
