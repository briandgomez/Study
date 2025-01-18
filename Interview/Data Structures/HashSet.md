* HashSet - similar to a Hashmap where its used to store unique elements. It doesn't have key-values only values.
  * The example below is a simple HashSet where it shows that it is NOT possible to add duplicates
  ```
    public class Main {
      public static void main(String[] args) {
          set();
      }

      public static void set() {
          HashSet<Integer> map = new HashSet<Integer>();
          map.add(1);
          map.add(2);
          map.add(3);
          // Does not get added since 3 is already in the set
          map.add(3);
          System.out.println(map);
      }
  }
  ```
![image](https://github.com/user-attachments/assets/efac7760-9a71-4f9d-afaa-5bdc170afa94)

#### Extra Resource(s)
[HashSet Explained](https://www.geeksforgeeks.org/hashset-in-java/)
