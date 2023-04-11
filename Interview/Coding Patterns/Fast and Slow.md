# Fast and Slow pointers
The Fast and Slow pointer technique is a [two pointer](https://github.com/briandgomez/Study/blob/main/Interview/Coding%20Patterns/2%20Pointers%20or%20Iterators.md) algorithm that uses two pointers that move through the array or linked list at different speeds. This approach is useful when dealing with cyclic linked lists or arrays. By moving at different speeds the algorithm proves that the two pointers are bound to meet. The fast pointer should catch the slow pointer once both the pointers are in a cyclic loop.

![image](https://user-images.githubusercontent.com/69539559/227813201-1f95cf2d-d8ab-4c5a-82b8-41677ec94270.png)  


### How do you identify when to use the Fast and Slow pattern?
- The problem will deal with a loop in a linked list or array
- When you need to know the position of a certain element or the overall length of the linked list.

### When should I use it over the Two Pointer method mentioned above?
- When working with a singly linked list where you can’t move in a backwards direction. An example of when to use the Fast and Slow pattern is when you’re trying to determine if a linked list is a palindrome.

### Problems featuring the fast and slow pointers pattern:
- Linked List Cycle (easy)
- Palindrome Linked List (medium)
- Cycle in a Circular Array (hard)

#### Extra Resource(s):
[Fast and Slow Pointer expalined](https://www.geeksforgeeks.org/how-does-floyds-slow-and-fast-pointers-approach-work/)
