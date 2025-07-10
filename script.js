const input = document.querySelector("#input");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");


// const addTodo=()=>{
//     const todo = document.createElement("div");
//     if(input.value===''){
//         return;
//     }
//     todo.innerHTML = `
//         <li class='bg-green-200 p-2 rounded'>
//             ${input.value}
//             <div class="mt-2">
//             <button class="deleteBtn bg-red-500 text-white px-2 py-1 rounded mr-2">Delete</button>
//             <button class="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
//             </div>
//         </li> `;
    
//     todoList.append(todo);
//     input.value='';
// }


// const addTodo=()=>{
//     if(input.value.trim()===''){
//         return;
//     }
//     //main
//     const liElem = document.createElement("li");
//     liElem.className='bg-green-200 p-2 rounded mt-2 mb-2 flex justify-between items-center'

//     // todoconatiner = checkbox, todoText, editInput;

//     const todoContainer=document.createElement("div");

//     //checkbox
//     const checkBox = document.createElement("input");
//     checkBox.type="checkbox";
//     checkBox.className="form-checkbox h-5 w-5 text-green-600"
//    // todoText
//     const todoText = document.createElement("span")
//     todoText.textContent=input.value; 

//     // editInput

//     const editInput = document.createElement("input");
//     editInput.className = "hidden border px-2 py-1 rounded";
//     editInput.type = "text";

    
    
//     checkBox.addEventListener("change",()=>{
//         todoText.classList.toggle('line-through');
//         liElem.classList.toggle("opacity-60")
//     })

//     todoContainer.append(checkBox,todoText,editInput);
    

//     const actionDiv= document.createElement("div");
//     actionDiv.className = "mt-2";



//     const deleteBtn = document.createElement('button'); 

//     deleteBtn.textContent="Delete";
//     deleteBtn.className='bg-red-500 text-white px-2 py-1 rounded mr-2';
//     deleteBtn.addEventListener("click", () => {
//         liElem.remove();
//     });

//     const editBtn = document.createElement("button")
//     editBtn.textContent="Edit";
//     editBtn.className='bg-yellow-500 text-white px-2 py-1 rounded'
//     editBtn.addEventListener("click",editHandler);

//     const saveBtn = document.createElement("button");
//     saveBtn.textContent = "Save";
//     saveBtn.className = 'hidden bg-blue-500 text-white px-2 py-1 rounded';
//     saveBtn.addEventListener("click",saveHandler);


//     function editHandler(){
//         editInput.value=todoText.textContent;
//         todoText.classList.add("hidden");
//         editInput.classList.remove("hidden");
//         saveBtn.classList.remove("hidden");
//         editBtn.classList.add("hidden")

//     }

//     function saveHandler(){
//         const  newTodoText = editInput.value.trim();
//         if(newTodoText!==''){
//             todoText.textContent=newTodoText;
//         }
//         todoText.classList.remove("hidden");
//         editInput.classList.add("hidden");
//         saveBtn.classList.add("hidden");
//         editBtn.classList.remove("hidden");

//     }


//     // append delete and edit in action Div

//     actionDiv.append(editBtn,saveBtn,deleteBtn);

//     // append Everything
    
//     liElem.append(todoContainer,actionDiv)
    

//     todoList.appendChild(liElem);
//     input.value=''

// }

window.addEventListener("DOMContentLoaded",()=>{
    const todos=getTodosFromStorage();
    todos.forEach((todo)=>createTodoItem(todo.text,todo.done));
})

function getTodosFromStorage(){
    return JSON.parse(localStorage.getItem("todos"))||[];
}

function saveTodosToStorage(){
    const todos=[];
    todoList.querySelectorAll("li").forEach((li)=>{
        const text = li.querySelector("span").textContent;
        const done = li.querySelector("input[type=checkbox]").checked;
        todos.push({text,done});
    })
    localStorage.setItem('todos',JSON.stringify(todos));
}
function createTodoItem(text ,isDone=false){
    const liElem = document.createElement("li");
    liElem.className='bg-green-200 p-2 rounded mt-2 mb-2 flex justify-between items-center'

    const todoContainer = document.createElement("div");
    todoContainer.className = "flex items-center gap-2";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-checkbox h-5 w-5 text-green-600";
    checkbox.checked = isDone;

    const todoText = document.createElement("span");
    todoText.textContent = text;
    


    const editInput = document.createElement("input");
    editInput.className = "hidden border px-2 py-1 rounded";
    editInput.type = "text";

    // Toggle line-through
    checkbox.addEventListener("change", () => {
    const checked = checkbox.checked;
    todoText.classList.toggle("line-through", checked);
    liElem.classList.toggle("opacity-60", checked);

    // Show/hide buttons based on checkbox state
    editBtn.classList.toggle("hidden", checked);
    deleteBtn.classList.toggle("hidden", checked);

    saveTodosToStorage();
});


    todoContainer.append(checkbox, todoText, editInput);

    // action div

    const actionDiv = document.createElement("div");
    actionDiv.className = "space-x-2";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = 'bg-red-500 text-white px-2 py-1 rounded';
    deleteBtn.addEventListener("click", () => {
        liElem.remove();
        saveTodosToStorage(); // ✅ Save on delete
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = 'bg-yellow-500 text-white px-2 py-1 rounded';

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.className = 'hidden bg-blue-500 text-white px-2 py-1 rounded';

    editBtn.addEventListener("click", () => {
        editInput.value = todoText.textContent;
        todoText.classList.add("hidden");
        editInput.classList.remove("hidden");
        saveBtn.classList.remove("hidden");
        editBtn.classList.add("hidden");
    });

    if (isDone) {
        todoText.classList.add("line-through");
        liElem.classList.add("opacity-60");
        editBtn.classList.add("hidden");
        deleteBtn.classList.add("hidden");
    }

    saveBtn.addEventListener("click", () => {
        const newValue = editInput.value.trim();
        if (newValue !== "") {
            todoText.textContent = newValue;
            saveTodosToStorage(); // ✅ Save on edit
        }
    todoText.classList.remove("hidden");
    editInput.classList.add("hidden");
    saveBtn.classList.add("hidden");
    editBtn.classList.remove("hidden");
  });
    actionDiv.append(editBtn,saveBtn,deleteBtn);

    liElem.append(todoContainer,actionDiv);

    todoList.append(liElem);



}

function addTodo(){
    if(input.value.trim()===''){return ;}
    createTodoItem(input.value.trim(),false);
    saveTodosToStorage();
    input.value="";
}



addBtn.addEventListener("click",addTodo);

input.addEventListener("keydown",(e)=>{

    if(e.key=="Enter") addTodo();
})






