# Topological Sort
Topological Sort is used to find a linear ordering of elements that have dependencies on each other. For example, if event `B` is dependent on event `A` then `A` comes before `B` in topological ordering.

The pattern works like this:
1. Initialization.  
  a) Store the graph in adjacency lists by using a HashMap.  
  b) To find all sources, use a HashMap to keep the count of in-degrees.    
  c) Build the graph and find in-degrees of all vertices.  
2. Build the graph from the input and populate the in-degrees HashMap.
3. Find all sources.  
  a) All vertices with `0` in-degrees will be sources and are stored in a Queue.  
4. Sort.   
  a) For each source, do the following things:  
      1. Add it to the sorted list.  
      2. Get all of its children from the graph.  
      3. Decrement the in-degree of each child by 1.  
      4. If a child’s in-degree becomes `0`, add it to the sources Queue.  
      
    b) Repeat (a), until the source Queue is empty.  

![image](https://user-images.githubusercontent.com/69539559/227814232-3c42766b-08c3-4554-bd5c-aeb60f3f39f6.png)  


### How to identify the Topological Sort pattern:
- The problem will deal with graphs that have no directed cycles
- If you’re asked to update all objects in a sorted order
- If you have a class of objects that follow a particular order

### Problems featuring the Topological Sort pattern:
- Task scheduling (medium)
- Minimum height of a tree (hard)

### Etxra Resource(s):
[Topological Sort Implemented](https://www.interviewcake.com/concept/java/topological-sort)
