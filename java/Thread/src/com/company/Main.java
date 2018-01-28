package com.company;

public class Main {

    public static void main(String[] args) {
	    Thready thready = new Thready("bird");

	    Thread thread1 = new Thread(thready);
	    thread1.start();
        Thread thread2 = new Thread(thready);
        thread2.start();

        do {
            System.out.println("Thread 1 still running");
        } while(thread1.isAlive());

        try {
            thread1.join();
            System.out.println("Thread 1 Joined");
            thread2.join();
            System.out.println("Thread 2 Joined");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        Thread thread3 = new Thread(new Printy("Red"));
        Thread thread4 = new Thread(new Printy("Blue"));
        Thread thread5 = new Thread(new Printy("Yellow"));

        thread3.start();
        thread4.start();
        thread5.start();

    }
}

class Thready implements Runnable {

    String thready;

    @Override
    public void run() {
        System.out.println(thready + " starting");
        for (int i = 0; i < 10; i++) {
            try {
                Thread.sleep(300);
                System.out.println("i is " + i);
            } catch (InterruptedException e) {
                System.out.println("Interrupted");
                e.printStackTrace();
            }
        }
    }

    public Thready(String thready) {
        this.thready = thready;
    }
}

class Printy implements Runnable {
    String color;

    public Printy(String color) {
        this.color = color;
    }

    @Override
    public void run() {
        print();
    }

    synchronized public void print() {
        System.out.print("[" + color);
        try {
            Thread.sleep(100);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("]");
    }
}