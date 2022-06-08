**Javascript**  
A programmning language that is used for front end and back end development to create interacive and appealing web applications. It controls the functionality of the application  

**HTML (Hypertext Markup Language)** - the structure(skeleton) of a website. It consists of pieces of code called 'elements' that represent what the application will look like such as having a header, image, link, etc.  
<img width="300" alt="image" src="https://user-images.githubusercontent.com/69539559/172500268-61b9824e-c059-4072-b4bf-700a9739072b.png">  
Elements such as header, main, and list item are all used in the image above to structure the website  

**CSS (Cascading Style Sheets)** - the styling of a website. It controls the UI/UX of a website such as the colors, animation, and 'feel' of a application.   
Ex:  
<img width="400" alt="image" src="https://user-images.githubusercontent.com/69539559/172500717-7f4d5831-a393-40b1-b6ec-5586617864f6.png">  
The CSS code above is referring to the class `search-engine-optimization` that is a part of the section element. It adds styles to that element such as increasing the 
height, adding padding, color, etc.  
#### ID vs Class  
A ID is used to identify only 1 element and a class is used to identify MORE than 1 element  
#### Box Model  
The CSS Box model is the technique of converting HTML elements into 'boxes'. These 'boxes' refer to adding spacing for a HTML element. Examples of this are margins,
border, and padding  
<img width="323" alt="image" src="https://user-images.githubusercontent.com/69539559/172502860-17f221cd-4672-4ae2-a886-2a8cb72963f6.png">

# React.js
A JS library used to create single page web applications and UIs by using components.

**seperation of concerns** - the idea of seperating an application into sections or parts where each section has a specific role. It makes code easier to read and resusable.

**single page web application**  - a app that does NOT reload the entire page when a change is made. Instead it only reloads the particular section of the app where the change was made (It makes apps more efficient).  
Ex:  
<img width="383" alt="image" src="https://user-images.githubusercontent.com/69539559/164130166-588bf7bb-c6a8-4a4f-a922-fc2aba643b20.png">

**element** - bulding blocks of React(and HTML) that represent what will be displayed.  
**component** - independent pieces of code that can be reused throughout a app (Similar to functions but instead they return HTML).  
**JSX (Javascript XML)** - syntax that allows you to use HTML with Javascript (It converts HTML to react elements).  
Ex:  
<img width="406" alt="image" src="https://user-images.githubusercontent.com/69539559/166856320-1b5ecc4a-1aa0-49f6-92b8-d492c1eee656.png">  
In the example above from Y.E.R, HTML tags are used to create a search input structure while the functions are inserted inside the tags as values for the attributes. This code allows to search for movies and tv shows thanks to the functions inside these attributes.  

**props** - custom attributes used to pass data to components (The equivalent of a prop in vanilla Javascript are arguements).    
Ex:  
<img width="554" alt="image" src="https://user-images.githubusercontent.com/69539559/167235489-1c099985-dd43-495a-9ea3-08e9c8a22b7a.png">  

In the image above, 'TodoList' has a prop called 'todos' which takes the data from the array of objects called 'todos'.  

**key** - a prop that is used to keep track of each element inside a array that has changed. It notifies React which elements have changed and updates accordingly.  

**destructuring** - a expression that unpacks data from arrays & objects and assigns it to distinct variables.  

**.prevenDefault()** - prevents a page from executing default behavior(prevents a page from refreshing).  

**state** - a object that is used to manage data and update a UI whenever the data has changed.  

**useState** - a hook used to track the state of a component.  

**ref** - a hook that gives access to a given DOM element.  
Ex:  
<img width="722" alt="image" src="https://user-images.githubusercontent.com/69539559/167272180-9c0a45e0-32c4-41f5-9978-3f30a2ba5e28.png">

In the image above, `inputRef` gives us access to the current input. By setting `inputRef.current.value = "" ` erases the current input when the submit button is clicked.   

## Rules of React  

### Hooks  
1. Hooks must be called at the very top of functions  
2. Hooks can NOT be used inside class components  
3. Hooks can be used within conditional statements  

### Components
1. Every component must begin with a capital letter  
2. A component can consist of 1 or 2 tags. If it contains 2 tags and has no children(nothing in between the tags) then it should be switched to 1 tag.  
3. A 1 tag component must be self closing(end in a forward slash)

**Bootstrap** - a CSS framework mainly used to create mobile and responsive apps.  

**Moment.js** - a JS library used to display, manipulate, or parse date and times easily  

**jQuery** - a JS library used to manipulate the DOM or add event listeners  
