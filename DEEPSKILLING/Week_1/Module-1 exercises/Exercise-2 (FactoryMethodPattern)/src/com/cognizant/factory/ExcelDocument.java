package com.cognizant.factory;

public class ExcelDocument implements Document {
    public void open() {
        System.out.println("Opening Excel document...");
    }

    public void close() {
        System.out.println("Closing Excel document...");
    }
}
