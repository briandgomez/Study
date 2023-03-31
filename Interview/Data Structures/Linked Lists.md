* Linkedlist - a linear data structure that consists of a series of connected nodes. Each node contains data(value) and a address(pointer)that points to the next node. The first node in the list is called the 'head' while the last node is called the 'tail  
	- Node - consists of a value and a pointer  

![image](https://user-images.githubusercontent.com/69539559/229016793-1149bbb1-0f72-4d42-998d-bbea2ddffabc.png)


#### A node broken down using objects
```
		{
Head ------>		“value” = 23,
			“next” = {
					"value" = 4,
					“next” = {
							“value” = 1,
Tail ------>						“next” = null	
						}
				}
		}				
```


#### Creating a instance of a linkedlist
```
class Main {
    public static void main(String[] args) {

    }

    LinkedList myLinkedList = new LinkedList(4);
}
```
	 
#### Implementing a Linkedlist that contains a Node  
```
import javafx.scene.Node;

public class LinkedList {
    // class variables
    private Node head;
    private Node tail;
    private int length;

    class Node {
    // class variables
        int value;
        Node next;

        // constructor for Node class
        Node(int value) {
            this.value = value;
        }
    }

    // constructor for LinkeList class
    public LinkedList(int value) {

        Node newNode = new Node(value);
        head = newNode;
        tail = newNode;
        length = 1;
    }
}
```

#### Linkedlist class broken down
* Node class:  
	- `this.value` corresponds to `int value`  
	- `Node(int value)` corresponds to `value`  
* LinkedList class:  
	- `new Node(value)` creates a node using the constructor of the ‘Node’ class  
	- `Node newNode` creates a variable called ‘newNode’ and points to the newly created node  
	- `head = newNode` points to the same node that ‘newNode’ is pointing to  
	- `tail = newNode` also points to the same node that ‘newNode’ is  pointing to  


#### All methods used for working with a Linkedlist
```
import javafx.scene.Node;

public class LinkedList {
    private Node head;
    private Node tail;
    private int length;

    class Node {
        int value;
        Node next;

        Node(int value) {
            this.value = value;
        }
    }

    public LinkedList(int value) {
        Node newNode = new Node(value);
        head = newNode;
        tail = newNode;
        length = 1;
    }

    public void printList() {
        Node temp = head;
        while (temp != null) {
            System.out.println(temp.value);
            temp = temp.next;
        }
    }

    public void getHead() {
        System.out.println("Head: " + head.value);
    }

    public void getTail() {
        System.out.println("Tail: " + tail.value);
    }

    public void getLength() {
        System.out.println("Length: " + length);
    }

    public void append(int value) {
        Node newNode = new Node(value);
        if (length == 0) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
        length++;
    }

    public Node removeLast() {
        // Head and tail point to the only node in the list
        if (length == 0)
            return null;
        Node temp = head;
        Node pre = head;
        while (temp.next != null) {
            pre = temp;
            temp = temp.next;
        }

        tail = pre;
        tail.next = null;
        length--;
        // No nodes in the list
        if (length == 0) {
            head = null;
            tail = null;
        }

        return temp;
    }

    public void prepend(int value) {
        Node newNode = new Node(value);
        if (length == 0) {
            head = newNode;
            tail = newNode;
        } else {
            newNode.next = head;
            head = newNode;
        }
        length++;
    }

    public Node removeFirst() {
        if (length == 0)
            return null;
        Node temp = head;
        head = head.next;
        // remove node
        temp.next = null;
        length--;
        if (length == 0) {
            tail = null;
        }
        return temp;
    }

    public Node get(int index) {
        if (index < 0 || index >= length) {
            return null;
        }

        Node temp = head;
        for (int i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    public boolean set(int index, int value) {
        Node temp = get(index);
        if (temp != null) {
            temp.value = value;
            return true;
        }
        return false;
    }

    public boolean insert(int index, int value) {
        if (index < 0 || index > length) {
            return false;
        }
        if (index == 0) {
            prepend(value);
            return true;
        }
        if (index == length) {
            append(value);
            return true;
        }
        // insert node in the middle
        Node newNode = new Node(value);
        Node temp = get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        length++;
        return true;
    }

    public Node remove(int index) {
        if (index < 0 || index >= length) {
            return null;
        }

        if (index == 0)
            return removeFirst();
        if (index == length - 1)
            return removeLast();
        Node prev = get(index - 1);
        Node temp = prev.next;
        prev.next = temp.next;
        // breaks connection
        temp.next = null;
        length--;
        return temp;
    }

    public void reverse() {
        Node temp = head;
        head = tail;
        tail = temp;
        Node after = temp.next;
        Node before = null;
        for(int i=0; i < length; i++) {
            after = temp.next;
            temp.next = before;
            before = temp;
            temp = after;
        }
    }
}
```  

#### Linked List vs Array List  
   - Linked lists do NOT have indexes  
   - Each element in a linked list is called a Node  
   - Each node has a pointer that points to the node after it. The Tail has a pointer pointing to null.  

#### Big O  
   - Adding a node to the END is O(1)  
   - Removing a node from the END is O(n). It requires iterating through the list from the beginning, having the tail point to the new last node and the new second to last node also point to the new last node.  
   - Adding a node to the FRONT is O(1)  
   - Removing a node to the FRONT is O(1)  
   - Adding a node in the MIDDLE O(n). It requires iterating through the list until reaching the desired location.  
   - Removing a node in the MIDDLE O(n). It requires iterating through the list until reaching the desired location.  
   - Searching for a specific node is O(n) 


#### Extra Resource(s): 
[Linkedlist explained](https://www.geeksforgeeks.org/what-is-linked-list//)
