* Quick sort - using a pivot point to switch the places of the items in the array. If the pivot point is less than the next item, switch the items.  
![Quick Sort Gif](https://user-images.githubusercontent.com/69539559/230986654-57c3a973-8d9e-4335-beb7-1c69f92964ab.gif)

### Quick Sort Code Example
#### Main.java
```
import java.util.Arrays;

public class Main {
   public static void main(String[] args) {
       QuickSort myQuickSort = new QuickSort();
       int[] myArray = { 4, 6, 1, 7, 3, 2, 5 };
       myQuickSort.quickSort(myArray);
       System.out.println(Arrays.toString(myArray));
   }
}
```
#### QuickSort.java
```
public class QuickSort {
   // should be private
   public void swap(int[] array, int firstIndex, int secondIndex) {
       int temp = array[firstIndex];
       array[firstIndex] = array[secondIndex];
       array[secondIndex] = temp;
   }


   // should be private
   public int pivot(int[] array, int pivotIndex, int endIndex) {
       int swapIndex = pivotIndex;
       for (int i = pivotIndex + 1; i <= endIndex; i++) {
           if (array[i] < array[pivotIndex]) {
               swapIndex++;
               swap(array, swapIndex, i);
           }
       }
       swap(array, pivotIndex, swapIndex);
       return swapIndex;
   }


   public void quickSortHelper(int[] array, int left, int right) {
       if (left < right) {
           int pivotIndex = pivot(array, left, right);
           quickSortHelper(array, left, pivotIndex - 1);
           quickSortHelper(array, pivotIndex + 1, right);
       }
   }


   public void quickSort(int[] array) {
       quickSortHelper(array, 0, array.length - 1);
   }
}
```
### When and when NOT to use Quick Sort  
#### When:  
- Fast sorting is desired  

#### When NOT:
- There is limited space  

#### Extra Resource:
[Quick Sort Explained](https://www.geeksforgeeks.org/quick-sort/)
