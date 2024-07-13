function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function toggleTask(taskElement) {
    const li = taskElement.parentElement;
    li.classList.toggle('completed');
}

function deleteTask(buttonElement) {
    const li = buttonElement.parentElement;
    li.remove();
}
