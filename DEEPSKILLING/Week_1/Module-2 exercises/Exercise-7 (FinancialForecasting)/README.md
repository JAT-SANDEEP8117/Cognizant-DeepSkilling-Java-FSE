# Exercise 7: Financial Forecasting (Recursion)

This project implements a recursive algorithm to forecast future values based on past growth rates (compounding interest). It also covers complexity analysis and optimization strategies.

---

## 1. Understanding Recursion

### What is Recursion?
Recursion is a programming technique where a method calls itself to solve a problem. It works by breaking down a large problem into smaller, identical sub-problems, and solving them step-by-step.

Every recursive function must contain two essential parts:
1. **Base Case**: The exit condition that stops the recursion from running forever.
2. **Recursive Step**: The expression where the method calls itself with modified parameters (moving closer to the base case).

### How it Simplifies Problems
Recursion makes the code look very similar to mathematical definitions. For example, compounding growth is naturally recursive:
* **Base Case**: The value at Year 0 is the starting capital.
* **Recursive Case**: The value at Year $N$ is the value at Year $(N-1) \times (1 + \text{growthRate})$.

---

## 2. Directory Structure

```text
Exercise-7 (FinancialForecasting)/
├── src/
│   └── com/
│       └── cognizant/
│           ├── forecasting/
│           │   └── FinancialForecasting.java
│           └── test/
│               └── ForecastingTest.java
└── bin/              (compiled .class files, auto-generated)
```

---

## 3. Complexity Analysis & Optimization

### Complexity of our Recursive Solution
* **Time Complexity**: $O(N)$ where $N$ is the number of years. The algorithm executes one recursive call per year.
* **Space Complexity**: $O(N)$ because each recursive call creates a new stack frame on the JVM call stack. If $N$ is very large (e.g., thousands of compounding periods), this can cause a `StackOverflowError`.

### How to Optimize to Avoid Excessive Computation and Memory Use
1. **Iterative Solution ($O(1)$ Space)**:
   * We can rewrite the logic using a simple `for` loop. This uses $O(N)$ time but runs in $O(1)$ space (constant memory) because it does not add new frames to the call stack.
2. **Memoization (Caching)**:
   * If we were calculating forecasts for multiple sub-periods repeatedly (overlapping subproblems), we could store calculated values in an array or map to avoid repeating the math.

---

## 4. How to Compile and Run

Open your terminal, navigate to the `Exercise-7 (FinancialForecasting)` folder, and execute the following commands:

### 1. Compile the code
```powershell
javac -d bin src/com/cognizant/forecasting/*.java src/com/cognizant/test/*.java
```

### 2. Run the application
```powershell
java -cp bin com.cognizant.test.ForecastingTest
```
