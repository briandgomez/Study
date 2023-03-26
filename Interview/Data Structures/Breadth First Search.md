• Breadth first search - starts at the root of the node and searches for all the nodes in the current level before moving into the next level

• Main.java
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


• BFS Methods
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
