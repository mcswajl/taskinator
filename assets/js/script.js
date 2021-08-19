var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

var h2 = document.createElement("h2");
h2.textContent = "Welcome";
h2.setAttribute("style", "text-align: center; margins: auto;");
body.appendChild(h2);

buttonEl.addEventListener("click", createTaskHandler);
