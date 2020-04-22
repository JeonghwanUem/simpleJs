const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function filterFn(toDo){
    return toDo.id === 1;
}

let toDos = [];

function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanTodos = toDos.filter(function(toDo){
        console.log(toDo.id);
        return toDo.id !== parseInt(li.id);
    });
    console.log(cleanTodos);
    toDos = cleanTodos;
    saveToDos();
}

function saveToDos(){
    
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintTodo(text){
   const li = document.createElement('li');
   const delBtn = document.createElement('button');
   const span = document.createElement('span');
   const newId = toDos.length+1;
   delBtn.innerText = 'X';
   delBtn.addEventListener("click",deleteTodo);
   span.innerHTML = text;
   li.appendChild(delBtn);
   li.appendChild(span);
   li.id = newId;
   toDoList.appendChild(li);
   const toDoObj ={
       text:text,
       id: newId
   };
   toDos.push(toDoObj);
   saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value ='';
}

function loadTodos(){
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if(loadedTodos !== null){
        
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach(function(toDo){
            paintTodo(toDo.text);
        });
    }else{
        
    }
}

function init(){
    loadTodos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();