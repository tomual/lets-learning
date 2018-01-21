package com.company.classes;

public class Room {
    private int area;
    private Furniture furniture;

    public Room(int area) {
        this.area = area;
        furniture = new Furniture();
        furniture.setName("Sofa");
        furniture.setSize(20);
    }

    public int getArea() {
        return area;
    }

    public void setArea(int area) {
        this.area = area;
    }

    public Furniture getFurniture() {
        return furniture;
    }

    public void setFurniture(Furniture furniture) {
        this.furniture = furniture;
    }

    public int getFurnitureSize() {
        return this.furniture.getSize();
    }
}
