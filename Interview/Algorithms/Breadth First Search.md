* Breadth first search - starts at the root node and searches through all the nodes in the same level(neighboring nodes) before moving onto the next level  
![BFS](https://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif). 

### Implementing BFS
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


       System.out.println(myBST.BFS());
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
           }
           else {
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
           if(value < temp.value) {
               temp = temp.left;
           }
           else if (value > temp.value) {
               temp  = temp.right;
           }
           else {
               return true;
           }
       }
       return false;
   }


   public ArrayList<Integer> BFS() {
       Node curretnNode = root;
       Queue<Node> queue = new LinkedList<>();
       ArrayList<Integer> results = new ArrayList<>();
       queue.add(curretnNode);


       while(queue.size() > 0) {
           curretnNode = queue.remove();
           results.add(curretnNode.value);
           if(curretnNode.left != null) {
               queue.add(curretnNode.left);
           }
           if(curretnNode.right != null) {
               queue.add(curretnNode.right);
           }
       }


       return results;
   }
}
```

### When and when NOT to use BFS
#### When:  
- Solution is NOT far from the root node  

#### When NOT:
- Solution IS far from the root node

#### Extra Resource:  
- [BFS Explained](https://brilliant.org/wiki/breadth-first-search-bfs/#breadth-first-search)  
- [Interview questions that use BFS](https://medium.com/@codingfreak/bfs-interview-questions-and-practice-problems-56ab23d4404a)
