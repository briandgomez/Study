• Graphs are data structures used to store connected data such as a network of people

• Graphs are made up of vertices(nodes) and edges(connections)
   ◇ Vertex - represents a entity
   ◇ Edge - represents the relationship between vertices


◇ Adjacency Matrix (connection matrix) - used to indicate the connections between vertices. It visually represents what vertices are directly connected to other vertices  
![image](https://user-images.githubusercontent.com/69539559/227812030-3ee5d942-8221-419f-a9e5-c0066eb475a6.png)  


• Adjacency List - another way to represent relationships between vertices. The relationships are represented using key-value pairs where the key is the vertex and the value are edges  
![image](https://user-images.githubusercontent.com/69539559/227812049-39dfb0e3-377f-4d97-b1d0-e1b5fcf4e0bf.png)  


• Add vertex method
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
public class Main {
   public static void main(String[] args) {
       Graph myGraph = new Graph();
       myGraph.addVertex("B");
       myGraph.addVertex("C");
       myGraph.printGraph();
   }


}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



• Add edge method
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
public class Main {
   public static void main(String[] args) {
       Graph myGraph = new Graph();
       myGraph.addVertex("A");
       myGraph.addVertex("B");
       myGraph.addEdge("A", "B");
      
       myGraph.printGraph();
   }


}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



• Remove edge method
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
public class Main {
   public static void main(String[] args) {
       Graph myGraph = new Graph();


       myGraph.addVertex("A");
       myGraph.addVertex("B");
       myGraph.addVertex("C");




       myGraph.addEdge("A","B");
       myGraph.addEdge("A","C");
       myGraph.addEdge("B","C");


       myGraph.removeEdge("A","B");


       myGraph.printGraph();
   }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

• Remove edge method
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
public class Main {
   public static void main(String[] args) {
       Graph myGraph = new Graph();


       myGraph.addVertex("A");
       myGraph.addVertex("B");
       myGraph.addVertex("C");
       myGraph.addVertex("D");




       myGraph.addEdge("A","B");
       myGraph.addEdge("A","C");
       myGraph.addEdge("A","D");
       myGraph.addEdge("B","D");
       myGraph.addEdge("C","D");


       myGraph.removeVertex("D");


       myGraph.printGraph();
   }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

• Graph methods
   ◇ 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import java.util.*;


public class Graph {
   private HashMap<String, ArrayList<String>> adjList = new HashMap<>();


   public void printGraph() {
       System.out.println(adjList);
   }


   public boolean addVertex(String vertex) {
       // check if vertex exists in adjaceny list
       if (adjList.get(vertex) == null) {
           // vertex -> key, new ArrayList<String>() -> value
           adjList.put(vertex, new ArrayList<String>());
           return true;
       }
       return false;
   }


   public boolean addEdge(String vertex1, String vertex2) {
       // check if vertex1 and vertex2 exist in adjency list
       if (adjList.get(vertex1) != null && adjList.get(vertex2) != null) {
           /*
            * adjList.get(vertex1) -> passing key returns value(empty array list)
            * add(vertex2) -> adds vertex to the empty array list of vertex1
            */
           adjList.get(vertex1).add(vertex2);
           adjList.get(vertex2).add(vertex1);
           return true;
       }
       return false;
   }


   public boolean removeEdge(String vertex1, String vertex2) {
       if (adjList.get(vertex1) != null && adjList.get(vertex2) != null) {
           adjList.get(vertex1).remove(vertex2);
           adjList.get(vertex2).remove(vertex1);
           return true;
       }
       return false;
   }


   public boolean removeVertex(String vertex) {
       if (adjList.get(vertex) == null)
           return false;
       // adjList.get(vertex) -> returns value(array list of vertices)
       for (String otherVertex : adjList.get(vertex)) {


           /*
            * adjList.get(otherVertex) -> returns the current vertex in the hash map
            * remove(vertex) -> removes "vertex" from the array list of the current vertex
            */
           adjList.get(otherVertex).remove(vertex);
       }
       // removes vertex from hash map
       adjList.remove(vertex);
       return true;
   }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
