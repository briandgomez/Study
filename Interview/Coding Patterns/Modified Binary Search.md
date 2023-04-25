# Modified Binary Search
Whenever you are given a sorted array, linked list, or matrix, and are asked to find a certain element, the best algorithm to use is the Binary Search.

For an ascending order set:
1. Find the start, middle and end. 
    - An easy way to find the middle would be:  
    `int middle = (start + end) / 2`  
    But this has a good chance of producing an integer overflow so it’s recommended that you represent the middle as:  
    `int middle = start + (end — start) / 2`
2. If the `key` is equal to the number at index `middle` then return `middle`
3. If `key` isn’t equal to the index `middle`:  
    - Check if `key < arr[middle]`. If it is reduce your search to `end = middle — 1`
    - Check if `key > arr[middle]`. If it is reduce your search to `end = middle + 1`

![image](https://user-images.githubusercontent.com/69539559/227813580-bc304b9c-195a-46c5-b819-8352a6cceeb3.png)  


### Problems featuring the Modified Binary Search pattern:
- Order-agnostic Binary Search (easy)
- Search in a Sorted Infinite Array (medium)
