2. Two Pointers or Iterators
Two Pointers is a pattern where two pointers iterate through the data structure in tandem until one or both of the pointers hit a certain condition.Two Pointers is often useful when searching pairs in a sorted array or linked list; for example, when you have to compare each element of an array to its other elements.

Two pointers are needed because with just one pointer, you would have to continually loop back through the array to find the answer. This back and forth with a single iterator is inefficient for time and space complexity — a concept referred to as asymptotic analysis. While the brute force or naive solution with 1 pointer would work, it will produce something along the lines of O(n²). In many cases, two pointers can help you find a solution with better space or runtime complexity.

![image](https://user-images.githubusercontent.com/69539559/227813090-5e47c053-71d0-4c03-b985-c4d61ed5ed68.png)  


Ways to identify when to use the Two Pointer method:
◇ It will feature problems where you deal with sorted arrays (or Linked Lists) and need to find a set of elements that fulfill certain constraints
◇ The set of elements in the array is a pair, a triplet, or even a subarray

Here are some problems that feature the Two Pointer pattern:
◇ Squaring a sorted array (easy)
◇ Triplets that sum to zero (medium)
◇ Comparing strings that contain backspaces (medium)