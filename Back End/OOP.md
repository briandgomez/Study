# OOP (Object Oriented Programming)
* OOP - a software model that uses objects to manipulate data
* object - an instance of a class   
* class - a template/blueprint used for creating objects. It contains all the properties/characteristics a specific type of object has  
      Ex: The Dog class below contains characteristics associated with a dog (name, height, etc...). These characteristics are needed when making other instances of the class  
          <img width="628" height="322" alt="image" src="https://github.com/user-attachments/assets/fa25f4a2-0b66-4460-ad6b-714a443b929b" />

* this - refers to the property or method created within the current class.  
       The image below shows 2 isntances of the Dog class where the values of the properties are changed and assigned using "this" refering to "myDog" and then "mySecondDog"  
        <img width="1481" height="928" alt="image" src="https://github.com/user-attachments/assets/31b30fc8-68f0-4ded-8bf4-6f644362fef0" />
  
* method - a function that performs a spceific action on a object
  
* constructor - a method that is used to create and initialize a instance of a class (predefines attributes/properties of the class)
      The Dog method in the Dog class is the constructor for that class. Its used to automatically assign values to those properties when a new class instance of "Dog" is created  

## The 4 Principles:
* Encapsulation - the bundling of data, along with the methods that act on that data, into a single unit. Its used to keep certain information protected.  
    * Encapsulation can be achieved by making all the variables/properties in a class private and using public methods to access and mainipulate the values of the properties  
    * Ex:  
         <img width="496" height="833" alt="image" src="https://github.com/user-attachments/assets/f4d49370-0351-47ac-a5ca-5e8834cf8a63" />  


* Polymorphism - ability for a method or object to behave differently depending on the situation
    * Ex:  When refering to a Dog object the output is different than that from a Cat object even though the same method is called for both  
         <img width="416" height="646" alt="image" src="https://github.com/user-attachments/assets/7e5fd055-f610-4a01-978a-447a9054e71a" />  
      * Method Overriding - when a method in a subclass/child class has the same name, return type, and parameter as the method in the parent class  
           <img width="408" height="416" alt="image" src="https://github.com/user-attachments/assets/9ae6c802-d47e-47cd-b466-9cc8221e0243" />
      * Method Overloading - wehn 2 methods in the same class have the same name but different number or types of parameters. The return types for these methods can be the same or different.  
           <img width="427" height="383" alt="image" src="https://github.com/user-attachments/assets/24c5b7c7-1ce6-47f1-b943-a5ee4954251f" />  
 

* Abstraction - the concept that says only 'necessary' information is shown or needed for other code to use. The unecessary details are not shown to the user.  
    * Ex:  The abstract class below only shows what needs to be done (i.e. make a sound) but does not show how its done    
         <img width="493" height="755" alt="image" src="https://github.com/user-attachments/assets/ab903577-97d2-48cb-826a-404bde6e0432" />  


* Inheritance - the ability for a class to inherit properties and methods from another class  
    * Ex:  
      <img width="410" height="717" alt="image" src="https://github.com/user-attachments/assets/f32027b8-e534-4358-9cef-01e107ec873e" />  
 

* super - a keyword used to call the constructor of a parent class in order to access the properties and methods  
    * Ex:  
         <img width="396" height="432" alt="image" src="https://github.com/user-attachments/assets/34b95ec3-6c8f-494b-911c-add0dc8505cb" />


### Reference
* https://www.geeksforgeeks.org/java/object-oriented-programming-oops-concept-in-java/
 
