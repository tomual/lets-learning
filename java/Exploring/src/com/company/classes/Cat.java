package com.company.classes;

public class Cat extends Animal implements Pet {
    public boolean likesTuna;

    public void vocalize() {
        System.out.println("Meow");
    }

    public boolean likesTuna() {
        return likesTuna;
    }

    @Override
    public void pet() {
        System.out.println(this.getName() + " scratches you");
        new Maru().takeVideo();
    }

    @Override
    public void feed() {
        System.out.println(this.getName() + " eats tuns");
    }

    class Maru {
        Maru() {
            setName("Maru");
        }
        public void takeVideo() {
            System.out.println(getName() + " rolls around on the ground");
        }
    }
}
