* The Hash method is only 1 way. You can only create a key-value pair and its address (a number) from the inputs and NOT vice versa.



Collisions:
◇ Separate chaining - multiple key-value pairs at the same address

◇ Linear probing - searching for a address that doesn’t have a key-value pair

▪ One type of open addressing

Set method

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
public class Main {
   public static void main(String[] args) throws Exception {
       HashTable myHashTable = new HashTable();
       myHashTable.set("nails", 100);
       myHashTable.set("tile", 50);
       myHashTable.set("lumber", 140);


       myHashTable.set("bolts", 200);
       myHashTable.set("screws", 140);


       myHashTable.printTable();
   }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



Get method

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
public class Main {
   public static void main(String[] args) throws Exception {
       HashTable myHashTable = new HashTable();
       myHashTable.set("nails", 100);
       myHashTable.set("tile", 50);
       myHashTable.set("lumber", 80);


       System.out.println(myHashTable.get("lumber"));
       System.out.println(myHashTable.get("bolts"));


   }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




 Hash Table methods 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import java.util.ArrayList;


public class HashTable {
   private int size = 7;
   // array of pointers to nodes
   private Node[] dataMap;


   public HashTable() {
       dataMap = new Node[size];
   }


   public class Node {
       private String key;
       private int value;
       private Node next;


       public Node(String key, int value) {
           this.key = key;
           this.value = value;
       }
   }


   public void printTable() {
       for (int i = 0; i < dataMap.length; i++) {
           System.out.println(i + ":");
           Node temp = dataMap[i];
           while (temp != null) {
               System.out.println(" {" + temp.key + "= " + temp.value + "}");
               temp = temp.next;
           }
       }
   }


   // will only be used by other methods in this class so it should be private
   private int hash(String key) {
       int hash = 0;
       /*
        * char[] keyChars -> declares a array of characters
        * key.toCharArray() -> splits "key" into a array of characters(letters)
        * (hash + asciiValue * 23) % dataMap.length -> returns number between 0 - 6
        */
       char[] keyChars = key.toCharArray();
       for (int i = 0; i < keyChars.length; i++) {
           int asciiValue = keyChars[i];
           hash = (hash + asciiValue * 23) % dataMap.length;
       }
       return hash;
   }


   public void set(String key, int value) {
       int index = hash(key);
       Node newNode = new Node(key, value);
       // inserting into a empty linked list
       if (dataMap[index] == null) {
           dataMap[index] = newNode;
       }
       // node(s) exist
       // dataMap[index] -> sets temp equal to pointer which means setting temp equal
       // to the 1st node
       else {
           Node temp = dataMap[index];
           while (temp.next != null) {
               temp = temp.next;
           }
           temp.next = newNode;
       }
   }


   public int get(String key) {
       int index = hash(key);
       Node temp = dataMap[index];
       while (temp != null) {
           // key is in the list
           if (temp.key == key) {
               return temp.value;
           }
           temp = temp.next;
       }
       return 0;
   }


   public ArrayList keys() {
       ArrayList<String> allKeys = new ArrayList<>();
       for (int i = 0; i < dataMap.length; i++) {
           Node temp = dataMap[i];
           while(temp != null) {
               allKeys.add(temp.key);
               temp = temp.next;
           }
       }
       return allKeys;
   }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



• Big O
◇ Hash method -> O(1)
◇ Set method - > O(1)
◇ Get method -> O(1)



• Interview Question
◇ Check to see if 2 arrays have a common number ( a number that is in both of them)

Inefficient Solution:
      - 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
public class Main {


   public static boolean itemInCommon(int[] array1, int[] array2) {
       for (int i : array1) {
           for (int j : array2) {
               if (i == j) return true;
           }
       }
       return false;
   }


   public static void main(String[] args) {


       int[] array1 = {1, 3, 5};
       int[] array2 = {2, 4, 5};


       System.out.println(itemInCommon(array1, array2));
      
   }


}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


▪ Efficient Solution
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import java.util.HashMap;


public class commonNumber {
   public boolean itemInCommon(int[] array1, int[] array2) {
       HashMap<Integer, Boolean> myHashMap = new HashMap<Integer, Boolean>();
  
       // add values from array1 to hashmap
       for (int i : array1) {
           myHashMap.put(i, true);
       }
  
       // compare values from array2 to values in hashmap
       for (int j : array2) {
           if (myHashMap.get(j) != null) return true;
       }
  
       return false;
  
   }
}


public class Main {
   public static void main(String[] args) {
       commonNumber hashmap = new commonNumber();


       int[] array1 = {1, 3, 5};
       int[] array2 = {2, 4, 5};


      System.out.println(hashmap.itemInCommon(array1, array2));


   }


}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
