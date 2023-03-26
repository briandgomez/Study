• A tree is considered full is it points 2 nodes or 0 nodes
• A tree is perfect is a tree where each node connects to 2 nodes
• A tree is complete when is filling the tree from left to right with no gaps
• A Parent node the is "upper" node that connects to 2 other nodes
   ◇ The 2 nodes connected to the same parent node are Child nodes. They are also called Siblings since they share the same parent.
   ◇ Every node can have at MOST 1 parent node
   ◇ A node with NO child nodes is called a Leaf


• Binary Search Tree (BST) - a tree where each node is placed in a specific position based on its value when compared to the parent node. Numbers that are larger than the parent node are placed on the RIGHT side while numbers that are less than are placed on the LEFT.

• BST have a big O of O(log n)
   ◇ O(log n) is used by dividing and conquering  
   
   • Insert method
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        BST myBst = new BST();
        myBst.insert(47);
        myBst.insert(21);
        myBst.insert(76);
        myBst.insert(18);
        myBst.insert(52);
        myBst.insert(82);

        myBst.insert(27);

        System.out.println(myBst.root.left.right.value);
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


• Contains method
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        BST myBst = new BST();
        myBst.insert(47);
        myBst.insert(21);
        myBst.insert(76);
        myBst.insert(27);
        myBst.insert(52);
        myBst.insert(82);

        System.out.println(myBst.contains(27));
        System.out.println(myBst.contains(17));

    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


• BST Class
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
public class BST {
    // should not be private 
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
            // inserting a node that already exists in the BST
            if (newNode.value == temp.value) {
                return false;
            }
            // new node is less than root node
            if (newNode.value < temp.value) {
                // no node exists
                if (temp.left == null) {
                    temp.left = newNode;
                    return true;
                }
                // node exists
                temp = temp.left;
            } 
            // new node is greater than root node 
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
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
