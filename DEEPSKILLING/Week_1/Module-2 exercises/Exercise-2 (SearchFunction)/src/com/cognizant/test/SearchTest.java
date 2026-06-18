package com.cognizant.test;

import com.cognizant.search.Product;
import com.cognizant.search.SearchAlgorithms;
import java.util.Arrays;
import java.util.Scanner;

public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(5, "Laptop", "Electronics"),
            new Product(2, "Shoes", "Apparel"),
            new Product(1, "Book", "Books"),
            new Product(4, "Chair", "Furniture"),
            new Product(3, "Watch", "Accessories")
        };

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter product ID to search: ");
        int targetId = scanner.nextInt();

        System.out.println("\n--- Linear Search (Unsorted) ---");
        Product p1 = SearchAlgorithms.linearSearch(products, targetId);
        System.out.println("Result: " + p1);

        System.out.println("\nSorting array...");
        Arrays.sort(products);
        for (Product p : products) {
            System.out.println(p);
        }

        System.out.println("\n--- Binary Search (Sorted) ---");
        Product p2 = SearchAlgorithms.binarySearch(products, targetId);
        System.out.println("Result: " + p2);

        scanner.close();
    }
}
