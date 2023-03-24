• Linked List vs Array List  
   ◇ Linked lists do NOT have indexes and all the elements are NOT continuous in memory  
   ◇ Each element in the list is called a Node  
   ◇ The first node is called the Head and the last node is called the Tail  
   ◇ Each node has a pointer that points to the node after it. The Tail has a pointer pointing to null.  

• Big O  
   ◇ Adding a node to the END is O(1)  
   ◇ Removing a node from the END is O(n). It requires iterating through the list from the beginning, having the tail point to the new last node and the new second to last node also point to the new last node.  
   ◇ Adding a node to the FRONT is O(1)  
   ◇ Removing a node to the FRONT is O(1)  
   ◇ Adding a node in the MIDDLE O(n). It requires iterating through the list until reaching the desired location.  
   ◇ Removing a node in the MIDDLE O(n). It requires iterating through the list until reaching the desired location.  
   ◇ Searching for a specific node is O(n)  
      ▪ 


• Node - consists of a value and a pointer  
   ◇ Ex:


					{
	Head ------>		“value” = 23,
							“next” = {
											"value = 4,
											“next” = {
															“value” = 1,
Tail 					------>							“next” = null	
														}
										}
						}
						
						
• Constructor - a method that creates and initializes a new instance of a class whenever the class is used. The instance created contains the properties(class  of that class.  
   ◇ Main.java
• 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {

    }

    LinkedList myLinkedList = new LinkedList(4);
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 

   ◇ LinkedList.java  
      ▪ Node class:  
         - ‘this.value’ = ‘int value’  
         - ‘Node(int value)’ = ‘value’  
      ▪ LinkedList class:  
         - ‘new Node(value)’ creates a node using the constructor of the ‘Node’ class  
         - ‘Node newNode’ creates a variable called ‘newNode’ and points to the newly created node  
         - ‘head = newNode’ points to the same node that ‘newNode’ is pointing to  
         - 'tail = newNode’ also points to the same node that ‘newNode’ is  pointing to  
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




• Printing a List
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        LinkedList myLinkedList = new LinkedList(4);

        myLinkedList.getHead();
        myLinkedList.getTail();
        myLinkedList.getLength();

        myLinkedList.printList();
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   ◇ LinkedList.java
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



• Appending
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        LinkedList myLinkedList = new LinkedList(1);
        myLinkedList.append(2);
        myLinkedList.printList();
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



• Removing from end
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        LinkedList myLinkedList = new LinkedList(1);
        myLinkedList.append(2);
        
        // 2 items in the list - Returns node with value of 2
        System.out.println(myLinkedList.removeLast().value);
        // 1 item in the list - Returns node with value of 1
        System.out.println(myLinkedList.removeLast().value);
        // 0 items in the list - Returns null
        System.out.println(myLinkedList.removeLast());
    }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



• Adding to the beginning
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        LinkedList myLinkedList = new LinkedList(2);
        myLinkedList.append(3);
        myLinkedList.prepend(1);
        myLinkedList.printList();
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


   ◇ 

• Removing from the beginning
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        LinkedList myLinkedList = new LinkedList(1);
        myLinkedList.append(2);
        
        // 2 items in the list - Returns node with value of 1
        System.out.println(myLinkedList.removeFirst().value);
        // 1 item in the list - Returns node with value of 2
        System.out.println(myLinkedList.removeFirst().value);
        // 0 items in the list - Returns null
        System.out.println(myLinkedList.removeFirst());
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



• Get method
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        LinkedList myLinkedList = new LinkedList(0);
        myLinkedList.append(1);
        myLinkedList.append(2);
        myLinkedList.append(3);

        System.out.println("Index: " + myLinkedList.get(2).value);
        myLinkedList.printList();
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



• Set method
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        LinkedList myLinkedList = new LinkedList(11);
        myLinkedList.append(3);
        myLinkedList.append(23);
        myLinkedList.append(7);

        myLinkedList.set(1,4);
        myLinkedList.printList();
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



• Insert method
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        LinkedList myLinkedList = new LinkedList(0);
        myLinkedList.append(2);

        myLinkedList.insert(1,1);
        myLinkedList.printList();
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



• Remove method
• 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        LinkedList myLinkedList = new LinkedList(11);
        myLinkedList.append(3);

        myLinkedList.append(23);
        myLinkedList.append(7);

        myLinkedList.remove(2);
        myLinkedList.printList();
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




• Reverse method
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        LinkedList myLinkedList = new LinkedList(1);
        myLinkedList.append(2);
        myLinkedList.append(3);
        myLinkedList.append(4);

        myLinkedList.reverse();
        myLinkedList.printList();
    }

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




• All methods
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
