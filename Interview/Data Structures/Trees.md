* tree - a [graph](https://github.com/briandgomez/Study/blob/main/Interview/Data%20Structures/Graph.md) that doesn't contain cycles and has specific rules when compared to a ordinary graph. 
   - Some of these rules are:
      - A Parent node is the "upper" node that connects to 2 other nodes
      - The 2 nodes connected to the same parent node are Child nodes. They are also called Siblings since they share the same parent.
      - Every node can have at MOST 1 parent node
      - A node with NO child nodes is called a Leaf
![image](https://user-images.githubusercontent.com/69539559/231269541-e099b1e8-623c-4805-87a2-0e854ab51a62.png)


### Terms for Trees:
   - A tree is considered "full" if it has 2 or 0 nodes
   - A tree is considered "perfect" when each node connects to 2 nodes
   - A tree is considered "complete" when filling the tree from left to right contains no gaps

&nbsp;
&nbsp;

* Binary Search Tree (BST) - a specific type of tree where each node is placed in a specific position based on its value when compared to the parent node. Numbers that are larger than the parent node are placed on the RIGHT side while numbers that are less than are placed on the LEFT.  
![image](https://user-images.githubusercontent.com/69539559/231270649-d2a4fc1d-dbf4-404d-bc90-2a7f8531f3ba.png). 

- BST have a big O of O(log n)
   - O(log n) is used by dividing and conquering  
   
#### Main.java
```
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
```


#### BST.java
```
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
```

#### Extra Resource(s):
- [Trees explained](https://www.geeksforgeeks.org/introduction-to-tree-data-structure-and-algorithm-tutorials/)  
- [BST explained](https://www.geeksforgeeks.org/binary-search-tree-data-structure/)   
