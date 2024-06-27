document.addEventListener('DOMContentLoaded', loadTasks);
document.getElementById('task-form').addEventListener('submit', addTask);

function addTask(e) {
    e.preventDefault();

    const taskInput = document.getElementById('task-input');
    const task = taskInput.value;
    if (task) {
        addTaskToList(task);
        saveTask(task);
        taskInput.value = '';
    }
}

function addTaskToList(task) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(task));

    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('Dzēst'));
    deleteBtn.addEventListener('click', () => {
        removeTask(task);
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToList(task));
}

function removeTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
