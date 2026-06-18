package com.cognizant.test;

import com.cognizant.singleton.Logger;
import java.util.Scanner;

public class SingletonTest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Logger l1 = Logger.getInstance();
        Logger l2 = Logger.getInstance();

        while (true) {
            System.out.println("\n=== Singleton Test Menu ===");
            System.out.println("1. Check if references are identical (l1 == l2)");
            System.out.println("2. Log a message using Logger 1");
            System.out.println("3. Log a message using Logger 2");
            System.out.println("4. Exit");
            System.out.print("Select an option: ");

            int option = scanner.nextInt();
            scanner.nextLine();

            if (option == 1) {
                System.out.println("Logger 1 reference: " + l1);
                System.out.println("Logger 2 reference: " + l2);
                if (l1 == l2) {
                    System.out.println("SUCCESS: Both point to the same instance!");
                } else {
                    System.out.println("FAILURE: Different instances!");
                }
            } else if (option == 2) {
                System.out.print("Enter log message: ");
                String msg = scanner.nextLine();
                l1.log(msg);
            } else if (option == 3) {
                System.out.print("Enter log message: ");
                String msg = scanner.nextLine();
                l2.log(msg);
            } else if (option == 4) {
                break;
            } else {
                System.out.println("Invalid option.");
            }
        }
        scanner.close();
    }
}
