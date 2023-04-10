
* Merge sort - breakdowns arrays into single valued sub arrays. The sub arrays are then sorted and merged into a final array
   - Can only be used if both arrays are sorted
   - Merge sort methods
![Merge Sort gif](https://user-images.githubusercontent.com/69539559/230983141-43855c58-4cf4-47d5-9731-4328373c1682.gif)

### Merge Sort Code Example 
#### Main.java
```
import java.util.Arrays;

public class Main {
   public static void main(String[] args) {
       BasicSort mySort = new BasicSort();


       int[] originalArray = { 3,1,4,2};
       int[] sortedArray = mySort.mergeSort(originalArray);


       System.out.println("\nOriginal Array: " + Arrays.toString(originalArray));
       System.out.println("\nSorted Array: " + Arrays.toString(sortedArray));


   }
}
```
#### BasicSort.java
```
import java.util.Arrays;
public class BasicSort {
   // puts subarrays back together(helper method)
   public int[] merge(int[] array1, int[] array2) {
       int[] combined = new int[array1.length + array2.length];
       int index = 0;
       int i = 0;
       int j = 0;
       // check if either array is empty
       while (i < array1.length && j < array2.length) {
           if (array1[i] < array2[j]) {
               combined[index] = array1[i];
               index++;
               i++;
           } else {
               combined[index] = array2[j];
               index++;
               j++;
           }
       }
       // if either array has more items than the other, continue looping throughthe
       // longer array
       while (i < array1.length) {
           combined[index] = array1[i];
           index++;
           i++;
       }
       while (j < array2.length) {
           combined[index] = array2[j];
           index++;
           j++;
       }
       return combined;
   }




   public int[] mergeSort(int[] array) {
       if(array.length == 1) {
           return array;
       }
       // break down original array into single item subarrays
       int midIndex = array.length/2;
       int[] left = mergeSort(Arrays.copyOfRange(array, 0, midIndex));
       int[] right = mergeSort(Arrays.copyOfRange(array, midIndex, array.length));
       return merge(left, right);
   }
}
```
#### Extra Resource:  
[Merge Sort Explained](https://www.geeksforgeeks.org/merge-sort/)
