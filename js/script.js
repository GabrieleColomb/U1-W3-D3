document.addEventListener("DOMContentLoaded", function() {
    const newTaskInput = document.getElementById("new-task");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    addTaskBtn.addEventListener("click", function() {
      const taskText = newTaskInput.value;
      if (taskText !== "") {
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        newTaskInput.value = "";
      }
    });
    
    function createTaskItem(taskText) {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
          <input type="checkbox" class="checkbox">
          <span class="task-text">${taskText}</span>
          <button class="delete-btn">Elimina</button>
        `;
  
      const checkbox = taskItem.querySelector(".checkbox");
      checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
          taskItem.classList.add("completed");
        } else {
          taskItem.classList.remove("completed");
        }
      });
  
      const deleteBtn = taskItem.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", function() {
        taskItem.remove();
    });
  
      return taskItem;
    }
});

    document.addEventListener("DOMContentLoaded", function() {
    const backgroundElement = document.getElementById("background");
    backgroundElement.style.backgroundColor = "	#c0c0c0"; 
  });