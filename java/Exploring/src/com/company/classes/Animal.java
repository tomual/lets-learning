package com.company.classes;

public class Animal {
    private String color;
    private String name;
    private int weight;

    public Animal() {}

    public Animal(String color, String name, int weight) {
        this.color = color;
        this.name = name;
        this.weight = weight;
    }

    public void vocalize() {
        System.out.println("Beep Boop");
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }
}
