
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');

const taskInput = document.querySelector('#task');
const textArea = document.querySelector('#comments');
// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e) {
  if(taskInput.value === '' ) {
    alert('Add a habibi task');
  }
  else{
  const li = document.createElement('li');

  li.className = 'collection-item';

  li.appendChild(document.createTextNode(taskInput.value));
  

  taskList.appendChild(li);


  storeInLocalStorage(taskInput.value);


  function storeInLocalStorage(task){
       let tasks;
       if (localStorage.getItem(tasks)===null){
        tasks=[];
       }
   
  }



  taskInput.value = '';

  e.preventDefault();
}
}


