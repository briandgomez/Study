• Stack - a data structure that can add or remove items only from the END. It follows LIFO (Last In First Out)
   ◇ Ex: A  container holding tennis balls
   ◇ A stack can be implemented by using a array list as long as you are adding and removing from the END
      ▪ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        Stack myStack = new Stack(2);
        myStack.push(1);

        myStack.printStack();
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
public class Stack {

    private Node top;
    private int height;

    class Node {
        int value;
        Node next;

        Node(int value) {
            this.value = value;
        }
    }

    public Stack(int value) {
        Node newNode = new Node(value);
        top = newNode;
        height = 1;
    }

    public void printStack() {
        Node temp = top;
        while(temp!= null) {
            System.out.println(temp.value);
            temp = temp.next;
        }
    }

    public void getTop() {
        System.out.println("Top: " + top.value);
    }

    public void getHeight() {
        System.out.println("Height: " + height);
    }

    public void push(int value) {
        Node newNode = new Node(value);
        if(height == 0) {
            top = newNode;
        }
        else {
            newNode.next = top;
            top = newNode;
        }
        height++;
    }

    public Node pop() {
        if(height == 0) {
            return null;
        }
        Node temp = top;
        top = top.next;
        temp.next = null;

        height--;
        return temp;
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


• Queue -  a data structure that can add or remove items but at opposite ends. En-queue(add) at one end of a linked list means DE-queue(remove) must be done at the opposite side. It follows FIFO (First In First Out)
   ◇ Ex: Waiting in line
      ▪ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Main {
    public static void main(String[] args) {
        Queue myQueue = new Queue(1);
        myQueue.enqueue(2);
        myQueue.printQueue();
    }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
public class Queue {
    private Node first;
    private Node last;
    private int length;

    public Queue(int value) {
        Node newNode = new Node(value);
        first = newNode;
        last = newNode;
        length = 1;
    }

    class Node {
        int value;
        Node next;

        public Node(int value) {
            this.value = value;
        }
    }

    public void printQueue() {
        Node temp = first;
        while (temp != null) {
            System.out.println(temp.value);
            temp = temp.next;
        }
    }

    public void enqueue(int value) {
        Node newNode = new Node(value);
        if (length == 0) {
            first = newNode;
            last = newNode;
        } else {
            last.next = newNode;
            last = newNode;
        }
        length++;
    }

    public Node dequeue() {
        if (length == 0) {
            return null;
        }
        Node temp = first;
        if(length == 1) {
            first = null;
            last = null;
        }
        else {
            first = first.next;
            temp.next = null;
        }
        length--;
        return temp;
    }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
