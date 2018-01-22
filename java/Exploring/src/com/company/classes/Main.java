package com.company.classes;

import java.io.*;
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
        testTree();
    }

    public static void testSet() {
        int numbers[] = {3, 6, 8, 9, 12, 55};
        Set<Integer> set = new HashSet<>();
        for (int i = 0; i < numbers.length; i++) {
            set.add(numbers[i]);
            System.out.println("Adding " + numbers[i]);
        }
        System.out.println(set);
        System.out.println(set.size());
        set.remove(numbers[0]);
        System.out.println(set);
        if (set.contains(55)) {
            System.out.println("Has 55");
        }
    }

    public static void testTree() {
        int numbers[] = {2, 5, 3, 7, 1, 8};
        Set<Integer> set = new HashSet<>();
        for (int i = 0; i < numbers.length; i++) {
            set.add(numbers[i]);
        }

        TreeSet treeSet = new TreeSet(set);
        System.out.println(treeSet);
        treeSet.add(4);
        System.out.println(treeSet);

        Set<Object> set2 = new HashSet<>();
        set2.add("Nina");
        set2.add("Tine");
        set2.add("Zinc");
        set2.add("Fred");
        TreeSet treeSet2 = new TreeSet(set2);
        System.out.println(treeSet2);

        LinkedHashSet<String> linkedHashSet = new LinkedHashSet();
        linkedHashSet.add("Java");
        linkedHashSet.add("Python");
        linkedHashSet.add("C++");
        linkedHashSet.add("PHP");
        System.out.println(linkedHashSet);

        Iterator iterator = linkedHashSet.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

    }

    public static void makeFile() {
        File file = new File("src/test2.txt");

        try (FileWriter fileWriter = new FileWriter(file)) {
            fileWriter.write("Some content\n");
            fileWriter.write("More content");
            fileWriter.close();

            FileReader fileReader = new FileReader(file);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String line = null;
            while ((line = bufferedReader.readLine()) != null) {
                System.out.println(line);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void readFile() {
        File file = new File("src/test.txt");

        try (FileInputStream fileInputStream = new FileInputStream(file)) {
            System.out.println("Size available: " + fileInputStream.available());

            int content;
            while((content = fileInputStream.read()) != -1) {
                System.out.print((char) content);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void testInputs() throws IOException {
        byte data[] = new byte[10];

        System.out.println("Enter characters: ");
        System.in.read(data);

        System.out.println("You entered: ");
        for (int i = 0; i < data.length; i++) {
            System.out.print((char) data[i]);
        }
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
