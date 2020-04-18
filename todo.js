const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

function saveToDos(){
    console.log(`test this shit ${toDos}`);
    localStorage.setItem(TODOS_LS,toDos);
}

function paintTodo(text){
   const li = document.createElement('li');
   const delBtn = document.createElement('button');
   const span = document.createElement('span');
   const newId = toDos.length+1;
   delBtn.innerText = 'X';
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
        
    }else{
        
    }
}

function init(){
    loadTodos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();