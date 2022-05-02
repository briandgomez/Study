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

## MongoDB
A document oriented program used to store data from NoSQL databases.

**mongoose** - a ODM library used to manipulate non-relational data, validate schemas, and translates code to the apropriate format in MongoDB.  

**ODM (Object Data Modeling)** - a technique that maps(organizes) data between a object Model and document database.  

**ORM (Object Relational Mapping)** - a technique that maps(organizes) data between a object model and a relational database.  
Ex: A Excel Spreadsheet