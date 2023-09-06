## Functions  

**Functions** - reusable blocks of code used to perform a specific task or action in multiple places. Their names must describe what they do. Here are some prefixes that are used for function names:  
1. "get…" – return a value  
2. "calc…" – calculate something  
3. "create…" – create something  
4. "check…" – check something and return a boolean, etc.
   
* A function can access outer variables. But it works only from inside out. This means you can access variables outisde the function while within the function but 
  you can't access variables inside the function while outside of it. 
    * For example, if there is a variable inside the function with the name `var1` and there is 
 a variable outside the function with the exact same name, then the variable inside the function will take precedence.
 (The code outside of the function doesn’t see its local variables)  
 


**parameter** -  the variable listed in the parentheses inside the function declaration   
**arguement** - the value passed to the function when the function is called  

Ex:  
<img width="212" alt="image" src="https://user-images.githubusercontent.com/69539559/169667026-0060d189-e203-4184-8c95-b5dbdf545cf8.png">  
* In the example above, `name` is the parameter and `Simba` is the arguement  

**callbacks** - a function that is passed as a arguement inside another function.
```
function mainFunction(callback) {
    console.log("Performing operation...");
    // Use setTimeout to simulate an asynchronous operation
    setTimeout(function () {
        callback("Operation complete");
    }, 1000);
}

// Define the callback function
function callbackFunction(result) {
    console.log("Result: " + result);
}

// Call the main function with the callback function
mainFunction(callbackFunction);
```
**Results**  
```
Performing operation...
Result: Operation complete
```
* In the example above `callbackFunction` is only called after 1000 milliseconds making it asynchronous

#### Extra Resource: 
- [Callbacks explained](https://www.geeksforgeeks.org/javascript-callbacks/)
- [Synchronous vs Asynchronous Callbacks](https://maximorlov.com/synchronous-vs-asynchronous-callbacks/#:~:text=The%20main%20difference%20between%20synchronous,like%20PHP%2C%20Ruby%20or%20Java.)

**arrow functions** - shorter syntax to write a function compared to Function Expressions  
Ex:  
<img width="284" alt="image" src="https://user-images.githubusercontent.com/69539559/169668559-d0c31d95-7ded-4819-94c9-268f666af9ac.png">    

**return keyword** - ends the execution of a function and returns a value  
Ex:  
<img width="280" alt="image" src="https://user-images.githubusercontent.com/69539559/172079990-872ca57f-4b71-444d-96c9-55fdb2cdc666.png">  

**object** - a unorder collection of data structured using key-value pairs. Each key-value pair is called a property. 

### Functions vs Objects  
The difference between functions and objects is that functions can be called. Functions are usually used to perform the same task mutliple times while objects are usually used to store and transport data.

**loops** - executes block of code repeatedly until a certain condition is met  

#### For vs While
A `for` loop is used when the numbers of times the loop should run is known while a `while` loop is used when the number of times is NOT known  

Ex:   
Iterating through an array - for  
Asking for user input - while


## Data Types  
The 7 data types in JavaScript(primitives meaning not a object):  
1. String  
2. Number  
3. BigInt - a very large number  
4. Symbol  
5. Boolean  
6. Undefined - a variable has been declared but has no value  
7. Null - means no value and can be assigned to a variable  
Ex of difference between null and undefined:  
<img width="364" alt="image" src="https://user-images.githubusercontent.com/69539559/172753117-bfe5e407-1ec0-41c8-a6df-8d8baee29f23.png">  
