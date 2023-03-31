* Doubly Linkedlist - a [linkedlist](https://github.com/briandgomez/Study/blob/main/Interview/Data%20Structures/Linked%20Lists.md) that has a pointer pointing to the next node AND the previous node. 
![image](https://user-images.githubusercontent.com/69539559/229229093-0b14781c-0fe3-43b2-b615-1e94008db163.png)


#### All methods used for working with a Linkedlist
```
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
```

#### Extra Resource(s)
[DLL Explained](https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/ListDouble.html#:~:text=The%20most%20common%20reason%20to,easier%20to%20implement%20and%20debug)
