# Two Pointers

* Two Pointers is a pattern where two pointers iterate through the data structure togther until one or both of the pointers hit a certain condition.The pointers themselves refer to the indexes within a array. Two Pointers is useful when searching for pairs in a sorted array or linked list. 
  - Example: Looking for a pair of numbers that sum up to another number called "X"   
![image](https://user-images.githubusercontent.com/69539559/227813090-5e47c053-71d0-4c03-b985-c4d61ed5ed68.png) 

* Two pointers are needed because using one pointer would force you to continually loop back through the array to find the answer. This back and forth with a single iterator is inefficient for time and space complexity. 
 
### Ways to identify when to use the Two Pointer method:
- It will feature problems where you deal with sorted arrays or linked lists AND need to find a set of elements that fulfill certain constraints
- The set of elements in the array is a pair, a triplet, or even a subarray

### Problems that feature the Two Pointer pattern:
- Squaring a sorted array (easy)
- Triplets that sum to zero (medium)
- Comparing strings that contain backspaces (medium)

#### Extra Resource(s)
[Two Pointers Explained](https://www.baeldung.com/java-two-pointer-technique)
