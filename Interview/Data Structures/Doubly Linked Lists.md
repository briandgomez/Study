 Append method
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        DoublyLinkedList myDLL = new DoublyLinkedList(1);
        myDLL.append(2);

        myDLL.printList();
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



• Remove from the end
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        DoublyLinkedList myDLL = new DoublyLinkedList(1);
        myDLL.append(2);

        System.out.println(myDLL.removeLast().value);
        System.out.println(myDLL.removeLast().value);
        System.out.println(myDLL.removeLast());

        myDLL.printList();
    }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



• Add to the beginning
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        DoublyLinkedList myDLL = new DoublyLinkedList(2);
        myDLL.append(3);

        myDLL.prepend(1);
        myDLL.printList();
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



• Remove from the beginning
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        DoublyLinkedList myDLL = new DoublyLinkedList(2);
        myDLL.append(1);

        System.out.println(myDLL.removeFirst().value);
        System.out.println(myDLL.removeFirst().value);
        System.out.println(myDLL.removeFirst());
    }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



• Get method
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        DoublyLinkedList myDLL = new DoublyLinkedList(0);
        myDLL.append(1);
        myDLL.append(2);
        myDLL.append(3);

        System.out.println(myDLL.get(1).value);
        System.out.println(myDLL.get(2).value + "\n");
        myDLL.printList();
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



• Set method
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        DoublyLinkedList myDLL = new DoublyLinkedList(11);
        myDLL.append(3);
        myDLL.append(23);
        myDLL.append(7);

        myDLL.set(1, 4);
        myDLL.printList();
    }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



• Insert method
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        DoublyLinkedList myDLL = new DoublyLinkedList(1);
        myDLL.append(3);

        myDLL.insert(1, 2);
        myDLL.printList();
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



• Remove method
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        DoublyLinkedList myDLL = new DoublyLinkedList(0);
        myDLL.append(1);
        myDLL.append(2);

        myDLL.remove(1);
        myDLL.printList();
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

All methods
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
public class DoublyLinkedList {
    private Node head;
    private Node tail;
    private int length;

    class Node {
        int value;
        Node next;
        Node prev;

        Node(int value) {
            this.value = value;
        }
    }

    public DoublyLinkedList(int value) {
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
            // reverse connection between new node and tail
            newNode.prev = tail;
            tail = newNode;
        }
        length++;
    }

    public Node removeLast() {
        // 0 nodes in the list
        if (length == 0)
            return null;
        Node temp = tail;
        // 1 node in the list
        if (length == 1) {
            head = null;
            tail = null;
        }
        // 2 nodes in the list
        else {
            tail = tail.prev;
            // breaks forward and reverse connection between the last 2 nodes
            tail.next = null;
            temp.prev = null;
        }
        length--;
        return temp;
    }

    public void prepend(int value) {
        Node newNode = new Node(value);
        if (length == 0) {
            head = newNode;
            tail = newNode;
        } else {
            newNode.next = head;
            head.prev = newNode;
            head = newNode;
        }
        length++;
    }

    public Node removeFirst() {
        if (length == 0) {
            return null;
        }
        Node temp = head;
        if (length == 1) {
            head = null;
            tail = null;
        } else {
            head = head.next;
            head.prev = null;
            temp.next = null;
        }
        length--;
        return temp;

    }

    public Node get(int index) {
        if (index < 0 || index >= length)
            return null;
        Node temp = head;
        // if index is in the front half of the list
        if (index < length / 2) {
            for (int i = 0; i < index; i++) {
                temp = temp.next;
            }
        }
        // if index is in the second half of the list
        else {
            temp = tail;
            for (int i = length - 1; i > index; i--) {
                temp = temp.prev;
            }
        }
        return temp;
    }

    public boolean set(int index, int value) {
        Node temp = get(index);
        // change the value of node
        if (temp != null) {
            temp.value = value;
            return true;
        }
        return false;
    }

    public boolean insert(int index, int value) {
        if (index < 0 || index >= length)
            return false;
        if (index == 0) {
            prepend(value);
            return true;
        }
        if (index == 0) {
            append(value);
            return true;
        }
        Node newNode = new Node(value);
        Node before = get(index - 1);
        Node after = before.next;
        // points new node to previous node(reverse)
        newNode.prev = before;
        // point new node to next node(forward)
        newNode.next = after;
        // points previous node to new node(forward)
        before.next = newNode;
        // points next node to new node(revers)
        after.prev = newNode;
        length++;
        return true;
    }

    public Node remove(int index) {
        if (index < 0 || index >= length)
            return null;
        // node is the 1st node in the list
        if (index == 0) {
            removeFirst();
        }
        // node is the last node in the list
        if (index == length - 1) {
            return removeLast();
        }
        Node temp = get(index);
        // pointer in the reverse direction points to previous node
        temp.next.prev = temp.prev;
        // pointer in the forward direction points to next node
        temp.prev.next = temp.next;
        // break connection between node being removed and the list
        temp.next = null;
        temp.prev = null;
        length--;
        return temp;
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
