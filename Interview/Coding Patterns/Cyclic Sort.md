# Cyclic sort
The Cyclic Sort pattern iterates over the array one number at a time, and if the current number you are iterating is not at the correct index, you swap it with the number at its correct index. You could try placing the number in its correct index, but this will produce a complexity of O(n^2) which is not optimal, hence the Cyclic Sort pattern.

![image](https://user-images.githubusercontent.com/69539559/227813335-5f7f8fc7-c4d3-4290-9077-3f0f16669071.png)  

### How do I identify this pattern?
- These problems involve a sorted array with numbers in a given range
- If the problem asks you to find the missing/duplicate/smallest number in an sorted/rotated array

### Problems featuring cyclic sort pattern:
- Find the Missing Number (easy)
- Find the Smallest Missing Positive Number (medium)

### Extra Resource(s):
[Cyclic Sort Explained](https://www.geeksforgeeks.org/cycle-sort/)
