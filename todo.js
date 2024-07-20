
function addTask() {
    
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim(); 

   
    if (taskText !== '') {
        
        var li = document.createElement('li');
        li.className = 'task-item';

        
        var taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.className = 'task-text'; 

        
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', function() {
            li.remove(); 
        });

       
        li.appendChild(taskSpan);
        li.appendChild(deleteButton);

        
        var taskList = document.getElementById('taskList');
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';

        // Add event listener to mark task as completed
        taskSpan.addEventListener('click', function() {
            li.classList.toggle('completed'); // Toggle completed class on click
        });
    }
}
