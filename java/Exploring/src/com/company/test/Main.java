package com.company.test;

public class Main {

    public static void main(String[] args) {
        System.out.println("Hello World");

        int a = 34;
        int b = 3;

        double c = 34;
        double d = 3;

        System.out.println("a + b = " + (a + b));
        System.out.println("a - b = " + (a - b));
        System.out.println("c / d = " + (c / d));
        System.out.println("a % b = " + (a % b));

        int e = 34;
        int f = 3;

        if (e == f) {
            System.out.println("e == f");
        } else {
            System.out.println("e!= f");
        }

        boolean isCat = true;
        boolean isBird = false;

        if (isCat || isBird) {
            System.out.println("Is a cat or a bird");
        }

        for (int i = 0; i < 10; i++) {
            if (i % 2 == 0) {
                System.out.println("Loopy even: " + i);
            }
        }

        int negativeNumber = -10;

        while (negativeNumber < 0) {
            System.out.println("Still negative: " + negativeNumber);
            negativeNumber++;
        }

        littleMethod("Vanilla");
        double price = givePrice("Vanilla");
        System.out.println(price);
    }

    public static void littleMethod(String iceCream) {
        System.out.println("littleMethod run with ice cream: " + iceCream);
    }

    public static double givePrice(String iceCream) {
        return 4;
    }
}