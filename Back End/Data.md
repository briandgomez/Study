# SQL
* SQL - A language that can access and manipulate data from **RELATIONAL** databases. It allows users to perform CRUD (Create, Read, Update, Delete,) operations.
  - relational databases - stores data in tables which are made of rows and columns similar to a spreadsheet. These tables are linked to other tables through keys.

* primary key - a number used to make each record (row) in a table unique 
* foreign key - a number that is used to link 2 tables together  
![image](https://user-images.githubusercontent.com/69539559/163200338-7ac15836-eb19-4ff3-aacb-884de0dfed21.png)
  - The table with the primary key is called the **Parent Table** and the other is called the **Child Table**  

* schema - list of commands that define the structure of a database
  * Simple schema that creates a **Employees** table  
    ```sql  
    CREATE TABLE employees (
    emp_no      INT             NOT NULL,  -- UNSIGNED AUTO_INCREMENT??
    birth_date  DATE            NOT NULL,
    first_name  VARCHAR(14)     NOT NULL,
    last_name   VARCHAR(16)     NOT NULL,
    gender      ENUM ('M','F')  NOT NULL,  -- Enumeration of either 'M' or 'F'  
    hire_date   DATE            NOT NULL,
    PRIMARY KEY (emp_no)                   -- Index built automatically on primary-key column
                                           -- INDEX (first_name)
                                           -- INDEX (last_name)
    );
    ```
    
* query - list of commands used to interact with a database 

## Rules for SQL Schemas  
1. Only use lowercase letters, numbers, and underscores 
2. Use simple and descriptive names for columns  
3. Use simple and descriptive table names 
4. Use a integer primary key for the standard `id` column  
5. Have consistent names for foreign keys (ex: primary key = foo, foreign key = foo_id)  

## SQL Command Order  
1. SELECT - select statement from a database(*column_name(s)*)  
2. FROM - select table(*table_name*)  
3. JOIN - combine rows from different tables where they have a common column(*table_name*)  
4. WHERE - filter records(*condition*)   
5. GROUP BY - groups rows that have the same value(*column_name(s)*)  
6. HAVING - same as `WHERE` clause execpt can be used with agregate functions(*condition*)  
7. ORDER BY - organize data in `ASC` or `DESC` order(*column_name(s)*)  
8. LIMIT - constrains the number of rows returned from a `SELECT` statement(*number*)   

### SQL Execution Order  
FROM -> JOIN -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY  

* MySQL - an open source program that allows users to create relational databases. By using MySQL and SQL users can find and store data based on its relationship with other data  
* MySQL2 - a npm package that allows users to connect to the MySQL database  

#### Extra Resources  
- [SQL Concepts and Queries](https://www.geeksforgeeks.org/sql-concepts-and-queries/) 
 
# NoSQL
* NoSQL - databases that store information that is NOT ONLY relational. The information is one of the following:  
  1. Key-Value - database where each data element is stored as a key-value  pair  
   ![image](https://user-images.githubusercontent.com/69539559/163230340-c9a66a68-1ab9-4778-bac3-cd69cb0b3b66.png)

  2. Document database - information that is stored in document(JSON) objects. The documents store information in field-value pairs. The values can be strings, integers, arrays, booleans or objects  
  ![image](https://user-images.githubusercontent.com/69539559/163215350-c9a50eea-8382-4530-a8fe-b320cd16f3ab.png)  

  3. Column-oriented database - data stored in tables, rows, and dynamic columns  
  ![image](https://user-images.githubusercontent.com/69539559/163231059-33b9f2dd-4b77-4f17-ab8f-ae3f591e7099.png)  

  4. Graph database - stores data in nodes and edges where nodes are information about people, places, or things and edges store information about the relationships between the nodes  
  ![image](https://user-images.githubusercontent.com/69539559/163231448-b97dad40-f442-452d-b4e7-e85d6bf85715.png)  

## MongoDB
* MongoDB - a document oriented program used to store data from NoSQL databases.
* mongoose - a ODM library used to manipulate **non-relational data**, validate schemas, and translates code to the apropriate format in MongoDB.  
* sequelize - a ORM tool used to manipulate **relational data** 

* ODM (Object Data Modeling) - a technique that maps(organizes) data between a object Model and document database.
  - Ex:   
    <img width="479" alt="image" src="https://user-images.githubusercontent.com/69539559/172074838-77d62544-57b2-4d1d-8fd5-2de9e80b6e1d.png">   
     - In the image above, the `findOneAndUpdate` makes it easier to search for the requested user  

  - Schema Ex:  
    <img width="376" alt="image" src="https://user-images.githubusercontent.com/69539559/172074759-bc9d428b-6a2b-4bc3-8a16-c0064e365ab0.png">  


* ORM (Object Relational Mapping) - a technique that maps(organizes) data between a object model and a relational database (It makes it easier to manipulate objects and store them in a database).    
   - Ex:  
     <img width="373" alt="image" src="https://user-images.githubusercontent.com/69539559/166617707-ac5bbb72-1a47-4751-aaae-1ae90a5200b2.png">  
      - In the example above from the `E-Commerce` API, `findOne` makes it easier to manipulate the objects(user inputs) and store it in the MySQL database.  

   - Schema Ex:  
     <img width="246" alt="image" src="https://user-images.githubusercontent.com/69539559/172074721-13fe032c-ad62-467d-96bd-92e104a64720.png">  


## When to use SQL vs NoSQL databases  
### NoSQL:  
When working with large amounts of data, data that is not sensitive, and structure is not a priority NoSQL is the better choice  
### SQL:  
When the data is sensitive, structure is a priority and does not change often then SQL database is the better choice
