# Unit Testing
The process of testing the smallest possible units of an application. Unit tests are part of the TDD (Test Driven Development) cycle

**TDD** - the process of writing failing tests (Red) BEFORE writing code. After writing tests, the minimal amount of code is written in order to pass the tests (Green). Developers can then refactor the code to keep it DRY (Refactor).
**TDD also makes it easier to write code since you know /have an idea of what to write thus the code itself is simple*

**Jest** - is a testing framework (mainly used for React0

# Git
Git is a version control management system that tracks all the changes and history made to a repository

# Node
A Javascript environment that allows developers to execute Javascript code on a local computer. It also gives developers access to features on a local computer such as the filesystem. (It is basically Chromes V8 Engine on a local computer).  

## Node.js in Depth  
Node.js processes events in a single thread operation. A single thread operation is when a new event appears and it is added to the end of a queue to be executed. Node will continuously execute event after event from the queue without stopping. This is called event looping. These events are asynchronous meaning after one event is executed the next event will be executed with the first event pending its response (there is no stopping or blocking of code being executed).  

Node also runs on the idea of callbacks. Callbacks are functions that execute after the first event has been executed (callbacks *link* lines of code together if necessary).  
Example of asynchronity and callbacks being used together:    
<img width="455" alt="image" src="https://user-images.githubusercontent.com/69539559/163501291-3ad3c561-c877-4a3d-a3e0-3cae7ae86818.png">

## When and When NOT to use Node.js  
**When:**  
1. Non-blocking is wanted
2. Event-driven
3. Data-intensive
4. I/O intensive  
Examples: Web servers, APIs fronting NoSQL databases  

**When Not:**  
1. Data calculations
2. Processor intensive
3. Blocking operations  

Useful Videos:  
[What is Node.js](https://www.youtube.com/watch?v=_RSL3S3Anxg)  
[When and when NOT to use Node.js](https://www.youtube.com/watch?v=UCd6LorxpkY&list=PLqq-6Pq4lTTa-d0iZg41U2RDqECol9C5B&index=7)  
[Callbacks in Node.js](https://www.youtube.com/watch?v=KYktOkdzAHw&list=PLqq-6Pq4lTTa-d0iZg41U2RDqECol9C5B&index=16)  

# Data
## SQL
A language that can access and manipulate data from RELATIONAL databases. It allows users to perform CRUD (Create, Read, Update, Delete,) operations.
**relational databases** - stores data in tables which are made of rows and columns similar to a spreadsheet. These tables are linked to other tables through keys.

**primary key** - a unique number used to identify each record(row) in a table     
**foreign key** - the number that is used to link 2 tables together  
![image](https://user-images.githubusercontent.com/69539559/163200338-7ac15836-eb19-4ff3-aacb-884de0dfed21.png)  
(The table with the primary key is called the *Parent Table* and the other table is called the *Child Table*)  
**unique key** - a number that ensures that each row in a particular column is unique  
**schema** - a list of commands that defines the structure of a database  
**query** - a list of commands that retrieve information from a database or performs other CRUD operations on that database

**MySQL** - an open source program that allows users to create relational databases. By using MySQL and SQL users can find and store data based on its relationship with other data  
**MySQL2** - a npm package that allows users to connect to the MySQL database  
 Additonal help:  
 [10 Basic SQL Concepts](https://www.programming-hero.com/blog/10-sql-concepts-that-every-developer-should-know.html)  
 
 ## NoSQL
Databases that store information that is NOT ONLY relational. The information is one of the following:  
1. Key-Value - database where each data element is stored as a key-value  pair  
![image](https://user-images.githubusercontent.com/69539559/163230340-c9a66a68-1ab9-4778-bac3-cd69cb0b3b66.png)
2. Document database - information that is stored in document(JSON) objects. The documents store information in field-value pairs. The values can be strings, integers, arrays, booleans or objects  
![image](https://user-images.githubusercontent.com/69539559/163215350-c9a50eea-8382-4530-a8fe-b320cd16f3ab.png)
3. Column-oriented database - data stored in tables, rows, and dynamic columns  
![image](https://user-images.githubusercontent.com/69539559/163231059-33b9f2dd-4b77-4f17-ab8f-ae3f591e7099.png)
4. Graph database - stores data in nodes and edges where nodes are information about people, places, or things and edges store information about the relationships between the nodes  
![image](https://user-images.githubusercontent.com/69539559/163231448-b97dad40-f442-452d-b4e7-e85d6bf85715.png)

## API
A Application Programming Interface is the middleman between a client and a server. It takes the request from a client and retrieves the data based on the request. The server then responds with the information in JSON format.  
**REST** - Representational State Transfer is a software architecture style that creates constraints on the communication between clients and servers.  
**JSON**  - Javascript Object Notation is a format used for transporting and storing data.  
**Endpoint**  - the point where the API and another program meet (the end of a communication channel).   
**Route** - the name used to access a endpoint.  
Ex:  
<img width="889" alt="image" src="https://user-images.githubusercontent.com/69539559/163685202-44b8fae9-71b1-4b0d-9ffb-189819fbea36.png">  
*A route can have multiple endpoints*  
**Header** - extra source of information whenever a API call is made. The most common information in a header are:  
1.Authorization(Ex: For logging into a account)  
2.WWW-Authenticate  
3.Accept-Charset  
4.Content-type  
5.Cache control  

Ex 1: Authorization  
<img width="490" alt="image" src="https://user-images.githubusercontent.com/69539559/163689654-4104e76f-4fee-4e7e-b8c4-1831b9751c85.png">  

Ex 2: Response  
<img width="529" alt="image" src="https://user-images.githubusercontent.com/69539559/163689703-68eac723-a555-41be-9ac0-c373cee7e503.png">

[What is a API w/ Examples](https://www.bigcommerce.com/blog/what-is-an-api/#what-is-an-api-request)  
[What is a Header](https://apipheny.io/api-headers/#examples)  

# MongoDB
 A document oriented program used to store data from NoSQL databases.

 **mongoose** - a ODM library used to manipulate non-relational data, validate schemas, and translates code to the apropriate format in MongoDB.  

 **ODM (Object Data Modeling)** - a technique that maps(organizes) data between a object Model and document database.  

 **ORM (Object Relational Mapping)** - a technique that maps(organizes) data between a object model and a relational database.  
 Ex: A Excel Spreadsheet