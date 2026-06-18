# Exercise 1: Implementing the Singleton Pattern

This project implements the **Singleton Design Pattern** for a logging utility class (`Logger`) in a Java application. It ensures that only one instance of the logger exists throughout the application lifecycle to guarantee consistent logging.

---

## Directory Structure

```text
Exercise-1 (SingletonPattern)/
├── src/
│   └── com/
│       └── cognizant/
│           ├── singleton/
│           │   └── Logger.java
│           └── test/
│               └── SingletonTest.java
└── bin/              (compiled .class files, auto-generated)
```

---

## How it Works

1. **Private Constructor**: Prevents instantiation from other classes using `new Logger()`.
2. **Private Static Reference**: Keeps track of the single instantiated object (`loggerInstance`).
3. **Public Static Method**: Provides global access to the object (`getInstance()`), using `synchronized` lazy loading to ensure thread safety.

---

## How to Compile and Run

Open your terminal or command prompt, make sure you are in the `Exercise-1 (SingletonPattern)` folder, and execute the following commands:

### 1. Compile the Java code
```powershell
javac -d bin src/com/cognizant/singleton/Logger.java src/com/cognizant/test/SingletonTest.java
```

### 2. Run the application
```powershell
java -cp bin com.cognizant.test.SingletonTest
```
