package com.company.classes;

import java.util.*;

public class Main {

    public enum Locations {PERTH, CANBERRA}
    public static Locations holidayLocation;
    public static final int LIMIT = 10;

    static class Login<T> {
        private T name;
        private T password;

        public Login(T name, T password) {
            this.name = name;
            this.password = password;
        }

        public T getName() {
            return name;
        }

        public void setName(T name) {
            this.name = name;
        }

        public T getPassword() {
            return password;
        }

        public void setPassword(T password) {
            this.password = password;
        }
    }

    public static void main(String[] args) {
        testGenerics();
    }

    public static void testGenerics() {
        Login login = new Login("Terry", "hunter2");
        System.out.println(login.getPassword());
        Login login2 = new Login(555, 888);
        System.out.println(login2.getPassword());
    }

    public static void enumTest() {
        holidayLocation = Locations.PERTH;
        System.out.println(LIMIT == 10);

        if(holidayLocation.equals(Locations.PERTH)) {
            System.out.println("P E R T H");
        }
    }

    public static void wrapUnwrap() {
        int i = 13;

        ArrayList<Integer> myArray = new ArrayList();
        myArray.add(i);

        Integer integer = new Integer(i);
        int unwrap = integer.intValue();
        int wrapped = myArray.get(0);
    }

    public static void testInterface() {
        Cat myCat = new Cat();
        myCat.setName("Georgey");
        System.out.println(myCat.getName());
        myCat.pet();
    }

    public static void meth() {
        int myInt = -45;
        int myInt2 = 55;

        System.out.println(Math.max(myInt, myInt2));
        System.out.println(Math.abs(myInt));
    }

    public static void makeHashMap() {
        HashMap users = new HashMap<String, Integer>();
        users.put("Tully", 34);
        users.put("Leif", 28);
        System.out.println(users.get("Tully"));

        if (users.containsKey("Tully")) {
            System.out.println("Tully is present");
        }

        System.out.println(users.values());
        System.out.println(users.entrySet());

        Iterator it = users.entrySet().iterator();
        while (it.hasNext()) {
            Map.Entry pair = (Map.Entry) it.next();
            System.out.println(pair.getKey());
        }
    }

    public static void makeArrays() {
        int[] myArray = {10, 1, 2, 3, 4};
        String[] myStrings = {"Teal", "Red", "Blue"};

        for (int i = 0; i < myArray.length; i++) {
            System.out.println(myArray[i]);
        }

        for (int i = 0; i < myStrings.length; i++) {
            System.out.println(myStrings[i]);
        }

        Arrays.sort(myArray);

        for (int i = 0; i < myArray.length; i++) {
            System.out.println(myArray[i]);
        }
    }

    public static void house() {
        Room myRoom = new Room(13);
        System.out.println(myRoom.getFurnitureSize());
    }

    public static void cat() {
        Animal myAnimal = new Animal("Grey", "Georgey", 5);
        System.out.println(myAnimal.getName());
        myAnimal.setName("Georgie");
        System.out.println(myAnimal.getName());

        Cat myCat = new Cat();
        myCat.setColor("Orange");
        System.out.println(myCat.getColor());
        myCat.vocalize();
        System.out.println(myCat.likesTuna());
        String s = "waaa";
        try {
            myCat.setWeight(Integer.parseInt(s));
        } catch (NumberFormatException e) {
            //System.out.println(e.toString());
            System.out.println("Please enter a valid number");
        }
        System.out.println(myCat.likesTuna());

        Cat yourCat = new Cat();
        myCat.setColor("Orange");
        System.out.println("Equals: " + myCat.equals(yourCat));
        System.out.println(yourCat.getClass());
        System.out.println(yourCat.getClass().getSimpleName());
        System.out.println(yourCat.toString());
    }

    public static void stringy() {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("Hello");
        stringBuilder.append(" World");
        System.out.println("Length is : " + stringBuilder.length());
        System.out.println(stringBuilder.capacity());
        stringBuilder.append(", now over 16");;
        System.out.println(stringBuilder.capacity());
        stringBuilder.delete(0, 6);

        System.out.println(stringBuilder);
    }
}
