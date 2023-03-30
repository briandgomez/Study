* Depth First Search - starts at the root node and searches through each branch before backtracking.  
![DFS](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif). 

### Implementing DFS
```
public class Main {
   public static void main(String[] args) {
       BST myBST = new BST();
       myBST.insert(47);
       myBST.insert(21);
       myBST.insert(76);
       myBST.insert(18);
       myBST.insert(27);
       myBST.insert(52);
       myBST.insert(82);


       System.out.println(myBST.DFSInOrder());
   }
}
```

#### All Methods for implementing a Binary Search Tree(BST)
```
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;


public class BST {
   Node root;


   class Node {
       int value;
       Node left;
       Node right;


       Node(int value) {
           this.value = value;
       }
   }


   public boolean insert(int value) {
       Node newNode = new Node(value);
       if (root == null) {
           root = newNode;
           return true;
       }
       Node temp = root;


       while (true) {
           if (newNode.value == temp.value) {
               return false;
           }
           if (newNode.value < temp.value) {
               if (temp.left == null) {
                   temp.left = newNode;
                   return true;
               }
               temp = temp.left;
           } else {
               if (temp.right == null) {
                   temp.right = newNode;
                   return true;
               }
               temp = temp.right;
           }
       }
   }


   public boolean contains(int value) {
       Node temp = root;
       while (temp != null) {
           if (value < temp.value) {
               temp = temp.left;
           } else if (value > temp.value) {
               temp = temp.right;
           } else {
               return true;
           }
       }
       return false;
   }


   public ArrayList<Integer> DFSPreOrder() {
       ArrayList<Integer> results = new ArrayList<>();


       // way to put a method inside a method
       class Traverse {
           Traverse(Node currentNode) {
               results.add(currentNode.value);
               if (currentNode.left != null) {
                   new Traverse(currentNode.left);
               }
               if (currentNode.right != null) {
                   new Traverse(currentNode.right);
               }
           }
       }
       new Traverse(root);
       return results;
   }


   public ArrayList<Integer> DFSPostOrder() {
       ArrayList<Integer> results = new ArrayList<>();


       class Traverse {
           Traverse(Node currentNode) {
               if (currentNode.left != null) {
                   new Traverse(currentNode.left);
               }
               if (currentNode.right != null) {
                   new Traverse(currentNode.right);
               }
               results.add(currentNode.value);
           }
       }
       new Traverse(root);
       return results;
   }


   public ArrayList<Integer> DFSInOrder() {
       ArrayList<Integer> results = new ArrayList<>();


       class Traverse {
           Traverse(Node currentNode) {
               if (currentNode.left != null) {
                   new Traverse(currentNode.left);
               }
               results.add(currentNode.value);
               if (currentNode.right != null) {
                   new Traverse(currentNode.right);
               }
           }
       }
       new Traverse(root);
       return results;
   }
}
```

### When and when NOT to use DFS
#### When:  
- Solution(s) IS far from the root node
-  

#### When NOT:
- Solution(s) is NOT far from the root node

#### Extra Resource:  
- [DFS Explained](https://brilliant.org/wiki/depth-first-search-dfs/#:~:text=Depth%2Dfirst%20search%20is%20used,if%20a%20graph%20is%20bipartite.) 
- [Interview questions that use DFS](https://medium.com/@codingfreak/depth-first-search-dfs-interview-questions-and-practice-problems-3862d9cd26f)
