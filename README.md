# Infinite Recursion Bug in JavaScript

This repository demonstrates a common error in recursive JavaScript functions: infinite recursion.  The `bug.js` file contains a function that, under certain conditions, will recurse infinitely, leading to a stack overflow error.

The solution is provided in `bugSolution.js`, addressing the issue by implementing proper base cases to prevent infinite recursion.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run the `myFunction` with two positive integers. 
3. Observe the stack overflow error.
4. Open `bugSolution.js` and observe the improved version.