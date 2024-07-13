Add new tasks
Mark tasks as completed
Delete tasks
Project Structure
index.html
style.css
app.js
Code Files
index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>To-Do List</h1>
        <input type="text" id="taskInput" placeholder="Add a new task">
        <button onclick="addTask()">Add Task</button>
        <ul id="taskList"></ul>
    </div>
    <script src="app.js"></script>
</body>
</html>
style.css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
}

input[type="text"] {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 10px;
    margin: 5px 0;
    background: #f9f9f9;
    border: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
}

li.completed {
    text-decoration: line-through;
    color: gray;
}

li button {
    background-color: #dc3545;
}

li button:hover {
    background-color: #c82333;
}
app.js
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

if (taskText === '') {
        alert('Please enter a task');
        return;
    }

const taskList = document.getElementById('taskList');
const li = document.createElement('li');
 li.innerHTML = `<span onclick="toggleTask(this)">${taskText}</span>
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
Uploading the Files
Step 1: Prepare Your Files
Compress the files into a ZIP file named todo_list.zip.
Step 2: Upload the Files
Go to the platform requesting the solution.
Use the file upload feature to upload todo_list.zip.
Sharing a Link
Step 1: Host Your Files on GitHub
Create a GitHub repository named todo-list.
Upload the index.html, style.css, and app.js files to the repository.
Make sure the repository is public.
Step 2: Share the GitHub Link
Copy the URL of your GitHub repository, e.g., https://github.com/your-username/todo-list.
Provide the link as requested.
