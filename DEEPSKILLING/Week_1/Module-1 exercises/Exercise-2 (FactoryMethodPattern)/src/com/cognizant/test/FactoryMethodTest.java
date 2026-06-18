package com.cognizant.test;

import com.cognizant.factory.Document;
import com.cognizant.factory.DocumentFactory;
import com.cognizant.factory.WordDocumentFactory;
import com.cognizant.factory.PdfDocumentFactory;
import com.cognizant.factory.ExcelDocumentFactory;
import java.util.Scanner;

public class FactoryMethodTest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\n=== Document Factory Menu ===");
            System.out.println("1. Create Word Document");
            System.out.println("2. Create PDF Document");
            System.out.println("3. Create Excel Document");
            System.out.println("4. Exit");
            System.out.print("Select an option: ");

            int option = scanner.nextInt();

            DocumentFactory factory = null;

            if (option == 1) {
                factory = new WordDocumentFactory();
            } else if (option == 2) {
                factory = new PdfDocumentFactory();
            } else if (option == 3) {
                factory = new ExcelDocumentFactory();
            } else if (option == 4) {
                break;
            } else {
                System.out.println("Invalid option.");
                continue;
            }

            Document doc = factory.createDocument();
            doc.open();
            doc.close();
        }

        scanner.close();
    }
}
