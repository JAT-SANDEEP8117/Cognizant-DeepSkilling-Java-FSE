package com.cognizant.test;

import com.cognizant.forecasting.FinancialForecasting;
import java.util.Scanner;

public class ForecastingTest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter present value ($): ");
        double pv = scanner.nextDouble();

        System.out.print("Enter annual growth rate (e.g., 0.05 for 5%): ");
        double rate = scanner.nextDouble();

        System.out.print("Enter number of years: ");
        int years = scanner.nextInt();

        double fv = FinancialForecasting.calculateFutureValue(pv, rate, years);

        System.out.printf("\nPredicted Future Value after %d years: $%.2f\n", years, fv);

        scanner.close();
    }
}
