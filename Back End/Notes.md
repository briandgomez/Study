# Unit Testing
The process of testing the smallest possible units of an application. Unit tests are part of the TDD (Test Driven Development) cycle

**TDD** - the process of writing failing tests (Red) BEFORE writing code. After writing tests, the minimal amount of code is written in order to pass the tests (Green). Developers can then refactor the code to keep it DRY (Refactor).  
**TDD also makes it easier to write code since you know /have an idea of what to write thus the code itself is simple*

**Jest** - is a testing framework (mainly used for React)

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

# Express
A backend framework that allows you to respond to requests by making it easier to create routes. With routes in place it makes it easier to write responses for specific URLS.  

[Difference between Express and Node](https://www.geeksforgeeks.org/node-js-vs-express-js/)


# API
A Application Programming Interface is the middleman between a client and a server. It takes the request from a client and retrieves the data based on the request. The server then responds with the information in JSON format.  
**REST** - Representational State Transfer is a software architecture style that creates constraints on the communication between clients and servers.  
**JSON**  - Javascript Object Notation is a format used for transporting and storing data.  
**Endpoint**  - the point where the API and another program meet (the end of a communication channel).   
**Route** - the name used to access a endpoint.  
Ex:  
<img width="889" alt="image" src="https://user-images.githubusercontent.com/69539559/163685202-44b8fae9-71b1-4b0d-9ffb-189819fbea36.png">  
*A route can have multiple endpoints*  

**Header** - extra source of information whenever a API call is made. The most common information in a header are:  
1. Authorization(Ex: For logging into a account)  
2. WWW-Authenticate  
3. Accept-Charset  
4. Content-type  
5. Cache control  

Ex 1: Authorization  
<img width="490" alt="image" src="https://user-images.githubusercontent.com/69539559/163689654-4104e76f-4fee-4e7e-b8c4-1831b9751c85.png">  

Ex 2: Response  
<img width="529" alt="image" src="https://user-images.githubusercontent.com/69539559/163689703-68eac723-a555-41be-9ac0-c373cee7e503.png">

[What is a API w/ Examples](https://www.bigcommerce.com/blog/what-is-an-api/#what-is-an-api-request)  
[What is a Header](https://apipheny.io/api-headers/#examples)  

## MVV Paradigm (Model-View-Controller)  
**model** - stores the data and its related logic
**view** - displays the data or deals with user interaction
**controller** - the middleman between the view and the model  
<img width="443" alt="image" src="https://user-images.githubusercontent.com/69539559/169930729-b8897c9f-98e7-4fbe-bc00-3bd85411c6e0.png">
