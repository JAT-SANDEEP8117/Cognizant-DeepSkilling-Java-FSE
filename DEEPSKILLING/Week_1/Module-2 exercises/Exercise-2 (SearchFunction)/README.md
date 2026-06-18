# Exercise 2: E-commerce Platform Search Function

This project implements and compares **Linear Search** and **Binary Search** algorithms to search for products in an e-commerce platform. It also includes an analysis of their performance and Big O time complexity.

---

## 1. Understanding Asymptotic Notation (Big O)

### What is Big O Notation?
Big O notation is a mathematical tool used to describe the efficiency of an algorithm. It tells us how the execution time (or memory usage) of an algorithm grows as the size of the input data ($N$) increases. It helps developers write scalable code by predicting how an algorithm will perform with large datasets.

### Search Operation Scenarios
* **Best Case**: The target element is found on the very first try.
  * *Linear Search*: The target is the first element ($O(1)$).
  * *Binary Search*: The target is the exact middle element ($O(1)$).
* **Average Case**: The target is found somewhere in the middle of the dataset.
  * *Linear Search*: Takes about $N/2$ steps, which grows linearly ($O(N)$).
  * *Binary Search*: Takes about $\log_2(N)$ steps ($O(\log N)$).
* **Worst Case**: The target is at the very end of the array, or doesn't exist at all.
  * *Linear Search*: We must check every single item in the array ($O(N)$).
  * *Binary Search*: We keep dividing the search space in half until it cannot be split further ($O(\log N)$).

---

## 2. Directory Structure

```text
Exercise-2 (SearchFunction)/
├── src/
│   └── com/
│       └── cognizant/
│           ├── search/
│           │   ├── Product.java
│           │   └── SearchAlgorithms.java
│           └── test/
│               └── SearchTest.java
└── bin/              (compiled .class files, auto-generated)
```

---

## 3. Complexity Analysis & Comparison

| Algorithm | Best Case | Average Case | Worst Case | Space Complexity | Requirement |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Linear Search** | $O(1)$ | $O(N)$ | $O(N)$ | $O(1)$ | Works on unsorted arrays |
| **Binary Search** | $O(1)$ | $O(\log N)$ | $O(\log N)$ | $O(1)$ | Requires array to be sorted |

### Which algorithm is more suitable for an E-commerce platform?
**Binary Search** is far more suitable for an e-commerce search platform:
1. **Scalability**: E-commerce stores typically have thousands or millions of products. If we have $1,000,000$ products, Linear Search could take up to $1,000,000$ comparisons. Binary Search will take a maximum of only $20$ comparisons.
2. **Frequency of Search vs. Sort**: Products are added or updated relatively infrequently (meaning sorting or indexing is done once), while search queries happen constantly (millions of times a day). Therefore, maintaining a sorted array or index is highly cost-effective because the fast search speed benefits every single user.

---

## 4. How to Compile and Run

Open your terminal, navigate to the `Exercise-2 (SearchFunction)` folder, and execute the following commands:

### 1. Compile the code
```powershell
javac -d bin src/com/cognizant/search/*.java src/com/cognizant/test/*.java
```

### 2. Run the application
```powershell
java -cp bin com.cognizant.test.SearchTest
```
