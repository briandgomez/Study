• Recursive contains method
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
public class Main {
   public static void main(String[] args) {
       RBST myRBST = new RBST();
       myRBST.insert(47);
       myRBST.insert(21);
       myRBST.insert(76);
       myRBST.insert(18);
       myRBST.insert(27);
       myRBST.insert(52);
       myRBST.insert(82);


       System.out.println("\nRBSt Cotains 27");
       System.out.println(myRBST.rContains(27));


       System.out.println("\nRBST Contains 17:");
       System.out.println(myRBST.rContains(17));
   }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


• Recursive insert method
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
public class Main {
   public static void main(String[] args) {
       RBST myRBST = new RBST();
       myRBST.insert(2);
       myRBST.insert(1);
       myRBST.insert(3);




       System.out.println("\nRoot: " + myRBST.root.value);
       System.out.println("\nRoot -> Left: " + myRBST.root.left.value);
       System.out.println("\nRoot -> Right: " + myRBST.root.right.value);
   }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


• Recursive methods
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
public class RBST {
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


   // recursive contains
   // method is private because you have to begin with the root node
   private boolean rContains(Node currentNode, int value) {
       // base case
       if (currentNode == null)
           return false;
       if (currentNode.value == value)
           return true;
       if (value < currentNode.value) {
           return rContains(currentNode.left, value);
       } else {
           return rContains(currentNode.right, value);
       }
   }


   // user calls this method
   public boolean rContains(int value) {
       return rContains(root, value);
   }


   // recursive insert
   private Node rInsert(Node currentNode, int value) {
       // base case
       if (currentNode == null)
           return new Node(value);
       if (value < currentNode.value) {
           currentNode.left = rInsert(currentNode.left, value);
       } else if (value > currentNode.value) {
           currentNode.right = rInsert(currentNode.right, value);
       }
       return currentNode;
   }


   // user calls this method
   public void rInsert(int value) {
       // empty node edge case
       if (root == null) {
           root = new Node(value);
       }
       rInsert(root, value);
   }


   private Node deleteNode(Node currentNode, int value) {
       // base case
       if (currentNode == null)
           return null;


       // determine if current value searching for exists in the tree
       if (value < currentNode.value) {
           currentNode.left = deleteNode(currentNode.left, value);
       } else if (value > currentNode.value) {
           currentNode.right = deleteNode(currentNode.right, value);
       }


       // node exists in tree
       else {
           // current node is a leaf
           if(currentNode.left == null && currentNode.right == null) {
               return null;
           }
           // only 1 node on the right side
           else if (currentNode.left == null) {
               currentNode = currentNode.right;
           }
           //only 1 node on the left side
           else if (currentNode.right == null) {
               currentNode = currentNode.left;
           }
           // node on both sides
           else {
               int subTreeMin = minValue(currentNode.right);
               currentNode.value = subTreeMin;
               currentNode.right = deleteNode(currentNode.right, subTreeMin);
           }
       }
       return currentNode;
   }


   // helper method
   public int minValue(Node currentNode) {
       while(currentNode.left != null) {
           currentNode = currentNode.left;
       }
       return currentNode.value;
   }


   public void deleteNode(int value) {
       deleteNode(root, value);
   }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
