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

**arrow functions** - a concise way to write a function  
`
const add = (a, b) => a + b;
console.log(add(1,2));
`
### Difference between arrow function and regular function
1. Arrow functions have a shorter syntax
#### Arrow Function
```
const arrowFunction = (a, b) => a + b;
```
#### Regular Function
```
function regularFunction(a, b) {
  return a + b;
}
```    
2. Arrow functions do NOT have their own "this" binding
#### Arrow Function
```
const person = {
  name: 'John',
  greet: () => {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.greet(); // Outputs: Hello, my name is undefined
```
#### Regular Function
```
const person = {
  name: 'John',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.greet(); // Outputs: Hello, my name is John
```

3. Arrow functions must be created before being called
#### Arrow Function
```
sayHello(); // Error: sayHello is not defined
const sayHello = () => {
  console.log('Hello!');
};
```
#### Regular Function 
```
sayHello(); // Works fine
function sayHello() {
  console.log('Hello!');
}
```  
  
**object** - a unorder collection of data structured using key-value pairs. Each key-value pair is called a property.  
```
let person = {
  name: "John",
  age: 30,
  greet: function() {
    return "Hello, " + this.name + "!";
  },
};
```

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

### Function vs Block scope  
1. Function scope is when a variable is declared inside a function and can be accessed anywhere from within the same function
```
function exampleFunction() {
    var x = 10;
    if (true) {
        var y = 20;
    }
    console.log(x); // 10
    console.log(y); // 20 (y is accessible even though it's declared inside an if block)
}

exampleFunction();
console.log(x); // Error: x is not defined (outside the function)
console.log(y); // Error: y is not defined (outside the function)
```  
2. Block scope is when a variable is declared inside a block of code and can only be accessed within the same bock of code
```
function exampleFunction() {
    let x = 10;
    if (true) {
        let y = 20;
        console.log(x); // 10 (x is accessible in the block)
        console.log(y); // 20 (y is accessible in the block)
    }
    console.log(x); // 10 (x is still accessible in the function)
    console.log(y); // Error: y is not defined (outside the block)
}

exampleFunction();
console.log(x); // Error: x is not defined (outside the function)
console.log(y); // Error: y is not defined (outside the function)
```

### let vs const vs var keywords
- const is immutable and block scoped meaning they can only be accessible within the block they are defined  
```
const pi = 3.14;
pi = 4.0; // This will result in an error because you cannot reassign a const variable.
const person = { name: "Alice" };
person.name = "Bob"; // This is allowed because it modifies the object's property, not the variable itself.
```

- let is mutable and also block scoped
```
let age = 30;
age = 35; // This is allowed because you can reassign a let variable.
```

- var is mutable and function scoped or global scope if the variable is declared outside a function  
```
  function example() {
  var x = 10;
  if (true) {
    var x = 20; // This reassigns the existing 'x' variable within the same function scope.
  }
  console.log(x); // Outputs 20
}
   example();
```  
