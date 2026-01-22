///////////////////////////////
const taskInput = document.getElementById("task");
const addButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const newTask = document.createElement('li');
    newTask.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">×</button>
    `;

    // Add random color
    newTask.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Add complete toggle
    newTask.querySelector('span').addEventListener('click', function() {
        this.parentElement.classList.toggle('completed');
    });

    // Add delete functionality
    newTask.querySelector('.delete-btn').addEventListener('click', function() {
        this.parentElement.remove();
    });

    taskList.appendChild(newTask);
    taskInput.value = '';
}

// Event listeners
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
////////////////////////////////////////////////////////////////////
/*const ideas=document.getElementById("task");
const addtask=document.getElementById("add-task");
const tasklist=document.getElementById("task-list");

addtask.addEventListener('click',()=>{
   // tasklist.textContent.add(ideas)
   const newtask=document.createElement('li');
   newtask.textContent=ideas.value ;
   tasklist.appendChild(newtask);
   ideas.value='';
   let colors=['blue','red','blueviolet'];
   newtask.style.color=colors[Math.floor(Math.random()*3)]

   console.log(newtask);
})

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TO-DO LIST</title>
    <link rel="stylesheet" href="To-do-list.css" type="text/css">
</head>
<body>
    <h1>To-Do List</h1>
    <div class="container">
        <input type="text" id="task" placeholder="Enter task">
        <button id="add-task">Add Task</button>
        <ul id="task-list"></ul>
    </div>
    <script>
      
    </script>
</body>
</html>*/