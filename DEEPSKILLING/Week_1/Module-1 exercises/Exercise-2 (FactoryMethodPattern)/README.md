# Exercise 2: Implementing the Factory Method Pattern

This project implements the **Factory Method Design Pattern** for a document management system. It allows the system to defer instantiation of document types (`Word`, `PDF`, `Excel`) to specialized factory classes, following the Open/Closed Principle.

---

## Directory Structure

```text
Exercise-2 (FactoryMethodPattern)/
├── src/
│   └── com/
│       └── cognizant/
│           ├── factory/
│           │   ├── Document.java
│           │   ├── WordDocument.java
│           │   ├── PdfDocument.java
│           │   ├── ExcelDocument.java
│           │   ├── DocumentFactory.java
│           │   ├── WordDocumentFactory.java
│           │   ├── PdfDocumentFactory.java
│           │   └── ExcelDocumentFactory.java
│           └── test/
│               └── FactoryMethodTest.java
└── bin/              (compiled .class files, auto-generated)
```

---

## How it Works

1. **Document Interface**: Declares standard document functions (`open()` and `close()`).
2. **Concrete Documents**: Class implementations for `WordDocument`, `PdfDocument`, and `ExcelDocument`.
3. **DocumentFactory Abstract Creator**: Exposes an abstract method `createDocument()`.
4. **Concrete Factory Classes**: Classes (like `WordDocumentFactory`, etc.) that implement `createDocument()` to return their specific type of document instance.

---

## How to Compile and Run

Open your terminal or command prompt, navigate to the `Exercise-2 (FactoryMethodPattern)` folder, and execute the following commands:

### 1. Compile the Java code
```powershell
javac -d bin src/com/cognizant/factory/*.java src/com/cognizant/test/*.java
```

### 2. Run the application
```powershell
java -cp bin com.cognizant.test.FactoryMethodTest
```
