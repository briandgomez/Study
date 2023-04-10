### Bubble Sort  
* Bubble sort - comparing 2 items in an array where the goal is to sort the largest items first. The array will eventually be sorted from smallest to greatest starting from the beginning of the array  
   - The largest items are “bubbled” or moved to the end of the array  
   - Involves sorting the existing array in place  
   ![Bubble Sort Gif](https://user-images.githubusercontent.com/69539559/230976227-f7fea962-c987-4520-b329-ae46d938d3f3.gif)

#### Bubble Sort Code Example  
```
import java.util.Arrays;


public class Main {
   public static void main(String[] args) {
       BasicSort myBubbleSort = new BasicSort();


       int[] myArray = {4,2,6,5,1,3};
      
       myBubbleSort.BubbleSort(myArray);
      
       System.out.println(Arrays.toString(myArray));
   }
}
public class BasicSort {
   public void BubbleSort(int[] array) {
       for(int i = array.length - 1; i > 0; i--) {
           for(int j = 0; j < i; j++) {
               if(array[j] > array[j+1]) {
                   // swap positions of items
                   int temp = array[j];
                   array[j] = array[j+1];
                   array[j+1] = temp;
               }
           }
       }
   }
}
```

### When and when NOT to use Bubble Sort  
#### When:  
- Array is partially sorted. 
- Array that needs to be sorted is relatively small. 

#### When NOT:
- Array that needs to be sorted has alot of elements. 
- Array is not sorted at all. 

#### Extra Resource:  
- [Bubble Sort Explained for Coding Interviews](https://www.acodersjourney.com/bubble-sort/.).  

&nbsp;
&nbsp;

### Selection Sort  
* Selection sort - swaps the smallest items in the array to the front in order to sort the array from smallest to largest  
![Selection Sort Gif](https://user-images.githubusercontent.com/69539559/230978140-c257acfa-53cb-441f-9210-5815b570c241.gif)
#### Selection Sort Code Example 
```
   public void SelectionSort(int[] array) {
       for(int i = 0; i < array.length; i++) {
           int minIndex = i;
           for(int j = i+1; j < array.length; j++) {
               if(array[j] < array[minIndex]) {
                   minIndex = j;
               }
           }
           if(i != minIndex) {
               int temp = array[i];
               array[i] = array[minIndex];
               array[minIndex] = temp;
           }
       }
   }

```
### When and when NOT to use Selection Sort  
#### When:  
- Array is NOT partially sorted. 
- Array that needs to be sorted is relatively small. 

#### When NOT:
- Array that needs to be sorted has alot of elements. 
- Array is mostly sorted.  

#### Extra Resource:  
- [Selection Explained for Coding Interviews](https://www.acodersjourney.com/selection-sort/#:~:text=When%20the%20array%20is%20NOT,be%20sorted%20is%20relatively%20small)

&nbsp;
&nbsp;

### Insertion Sort  
* Insertion sort - starting from the beginning of the array it compares the first 2 elements. If the current element is less than the previous, compare the current element to the previous elements unitl it reaches its apropriate position. Then move onto the next pair of elements. This is repeated until the array is completely sorted.  
![Insertion Sort Gif](https://user-images.githubusercontent.com/69539559/230978884-f1a3711f-5ee7-4f19-8c8c-54aec12a7acc.gif)
#### Insertion Sort Code Example 
```
   public void insertionSort(int[] array) {
       for(int i = 1; i < array.length; i++) {
           int temp = array[i];
           int j = i -1;
           while(j > -1 && temp < array[j]) {
               array[j+1] = array[j];
               array[j] = temp;
               j--;
           }
       }
   }

```
### When and when NOT to use Insertion Sort  
#### When:  
- Array is mostly sorted. 
- Array that needs to be sorted is relatively small. 
- Elements neeed to be sorted online - as they come in. 

#### When NOT:
- Array that needs to be sorted has alot of elements. 
- Array is not sorted at all. 

#### Extra Resource:  
- [Insertion Sort Explained for Coding Interviews](https://www.acodersjourney.com/insertion-sort/)    
