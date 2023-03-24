• Big O - a way to compare pieces of code to each other. It helps determine how efficient code is.  
   ◇ Time Complexity - measures the number of operations  
   ◇ Space Complexity - measures the amount of memory

• Symbols that describe time complexity:  
   ◇ Best case - omega  
   ◇ Average Case - theta  
   ◇ Worst Case - omicron  

• O(n) - linear  
   ◇ As n increases the number of operations increases(proportional)  
      ▪ Ex:  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    public static void printItems(int n) {
        for(int i=0; i < n; i++) {
            System.out.println(i);
        }
    }
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  


• Drop Constants - Simplify Big O Rule 1  
   ◇ When describing time complexity of code, drop the constants  
      ▪ Ex:  
         - The code below will print out 0-9 for both for loops. Thus the Big O is: O(n) + O(n) = O(2n) but to simplify this drop the 2 so the final answer is O(n)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    public static void printItems(int n) {
        for(int i=0; i < n; i++) {
            System.out.println(i);
        }
        
        for(int j=0; j < n; j++) {
            System.out.println(j);
        }
    }
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



• O(n^2) - quadratic (loop within a loop)  
   ◇ Ex:  
      ▪ The code below will print 0-9 first for j then for i resulting in: i=0 j=0, i=0 j=1, i=0 j=2,etc. Thus the complexity is n * n = O(n^2).
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    public static void printItems(int n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.println("i = " + i + "\n" + "j = " + j);
            }
        }
    }
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      ▪ Note: If there were 3 for loops the time complexity would be : n * n * n = O(n^3) which is the same as O(n^2)



• Drop Non-Dominant - Simplify Big O Rule 2  
   ◇ The nested for loop will be O(n^2) while the remaining for loop will be O(n) resulting in:  O(n^2) + O(n) = O(n^2 + n). But as n increase n^2 will get bigger FASTER than n making n irrelevant . n will not affect n^2 . So n^2 is the dominant term and n is the non--dominant term  
      ▪ Ex:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.println("i = " + i + "\n" + "j = " + j);
            }
        }
        for (int k = 0; k < n; k++) {
            System.out.println("k = " + k);
        }
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


• O(1) - constant  
   ◇ As n increases the number of operations stays the same(constant)  
      ▪ Ex:  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    public static void addItems(int n) {
        System.out.println(n + n);
    }
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


• O(log n) - logarithmic (divide and conquer)  
   ◇ As n increases the number of operations increases up to a certain point. After this point the number of operations stays the same(constant)  

• Different Terms for Inputs - Simplify Big O Rule 3  
   ◇ The first for loop will run until i < a while the second will run until j < b. Even thought they are both for loops and both run for O(n) you can NOT combine them.  
   ◇ In this case you need to have different terms for inputs thus the Big O is : O(a + b)  
      ▪ Ex:  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    public static void printItems(int a, int b) {
        for (int i = 0; i < a; i++) {
            System.out.println(i);
        }

        for (int j = 0; j < b; j++) {
            System.out.println(j);
        }
    }
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      ▪ Note: If it was a nested for loop it would be O(a * b)


• Array Lists  
   ◇ Appending or Removing from the end of a array list is O(1)  
   ◇ Appending or Removing to the beginning of a array list is O(n). Re-indexing each element is needed when modifying the beginning of the list.  
   ◇ Searching for a specific element (not using the indices) is O(1)  

Big O Chart
![image](https://user-images.githubusercontent.com/69539559/227420945-ccea9b5e-138c-4fdf-aa28-5ca89bb4058f.png)

