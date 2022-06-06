## Functions  

* A function can access outer variables. But it works only from inside out. This means you can access variables outisde the function while within the function but 
  you can't access variables inside the function while outside of it. 
    * For example, if there is a variable inside the function with the name `var1` and there is 
 a variable outside the function with the exact same name, then the variable inside the function will take precedence.
 (The code outside of the function doesn’t see its local variables)  
 
* `Functions` are used to perform a specific task or action in multiple places. Their names must describe what they do. Here are some prefixes that are used for function names:  
1. "get…" – return a value  
2. "calc…" – calculate something  
3. "create…" – create something  
4. "check…" – check something and return a boolean, etc.  

**parameter** -  the variable listed in the parentheses inside the function declaration   
**arguement** - the value passed to the function when the function is called  

Ex:  
<img width="212" alt="image" src="https://user-images.githubusercontent.com/69539559/169667026-0060d189-e203-4184-8c95-b5dbdf545cf8.png">  
In the example above, `name` is the parameter and `Simba` is the arguement  

**callbacks** - a function that is to be called later if necessary  
Ex:  
<img width="417" alt="image" src="https://user-images.githubusercontent.com/69539559/169668243-b8fa18b1-bb6a-4795-9b40-5e361f5c7299.png">  
In the image above, the `yes` parameter corresponds to the `showOk` arguement while `no` corresponds to the `showCancel` arguement. `showOk` or `showCancel` 
will be "called back" depending on the users response.  

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
