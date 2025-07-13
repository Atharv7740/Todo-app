## Content
- [Content](#content)
  - [PRD](#prd)
  - [Concept Practiced by this project](#concept-practiced-by-this-project)
  - [README](#readme)
  - [project flow](#project-flow)
  - [how to implement something](#how-to-implement-something)


### PRD 

> Create a habit of making ***product requirement document (PRD)*** in every project.  


***What PRD do??***  
This is the project planning document and is just for you — it keeps your brain clear and project focused.

***what it should inclued***  

what are we building?  
>  one line , eg: building a project that will do this thing using this thing.

***Goal***  
dom manipulation []  
api integration [] 
tailwind practice []

***Features***  
Add todo []  
Update Todo []  
delete Todo []  
Mark done (line trough) []

***rough UI***  
input box []  
add button []  
todo box []  
todo : {
    text,
    delete,
    edit,
    on click line trough
}

***tech stack***  
html[]  
js[]  
tailwind[]

### Concept Practiced by this project
1. Local storage crud aana chaiye.
2. DOM manipulation  
   - CreateElement  
     - className
     - textContent
     - innerHTML
     - innerText
     - addEventListner
     - classList
       - add 
       - remove
       - toggle
   - appendElement
     - append
     - appendChild
3. Input ke saath kaam karna aana chaiye
4. Array,object aana chaiye.
   - ***Array***
      - forEach
      - basic function
      - formation as data
   - ***object***
     - push data in array as object..
     - working with object



### README
> This is your project’s public face. Keep it simple at the start.
   
***structure***

***project name***  
***Description***  
***features***  
***How to run***

### project flow
- start creating static ui
- indentify the dynamic part

### how to implement something
1. ***Add tailwind to html file.***  

```html
<!-- us the cdn link of tailwind and paste it in head of html file. -->

<!-- cdn link -->
<head>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

```

2. ***Input value get***  

```js
//select input bar
const input = document.querySelector("#input");

// check input value 

if(input.value===''){
  return ;
}

```

3. ***CreateElement***

```js
cosnt todo = document.createElement("div"); // in creatElement(tag/element)

todo.innerHTML = `
  <li class='bg-green-200 p-2 rounded'>
    ${input.value}
    <div class="mt-2">
      <button class="bg-red-500 text-white px-2 py-1 rounded mr-2">Delete</button>
      <button class="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
    </div>
  </li>
`;


```
***How to work with localStorage***   

1. ***Storing data into localStorage***  
***syntax***   
`localStorage.setItem("key","value");`  
value can be string only so Use ***JSON.stringify(obj/array)***;

***example***  
```js
let todos = ["buy milk", "walk dog"];
localStorage.setItem("todos", JSON.stringify(todos));
```  

2. ***Retriving Data from localStorage***  
   ***syntax***
   `localStorage.getItem("key");`  

   use ***JSON.parse(obj/arr)*** to convert back into array/obj.

   ***window.addEventListner("load",callbacK)*** - to load things when window load..

   ***example***  
   ```js  
   window.addEventListener("load", () => {  
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    console.log(savedTodos);});
    ```  

3. ***Update***
   fetch -> modify -> strignfy -> storeAgain  
   ***setItem is used***
   ```js
   let todos = JSON.parse(localStorage.getItem("todos")) || [];  
   todos.push("new task");  
   localStorage.setItem("todos", JSON.stringify(todos));
   ```

4. ***Removing and clear***  
   
  ***Removing*** - remove specific key item  
  `localStorage.removeItem("todos");` 

  ***Clear*** - clear the local storage  
  `localStorage.clear();` 
