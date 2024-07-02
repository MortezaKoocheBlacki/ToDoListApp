let userTasksInput = document.querySelector(".wrapper .userTask"),
taskContainer = document.querySelector(".tasks");

userTasksInput.addEventListener("keyup", function(e){
      let userTaskValue = userTasksInput.value;
      if(e.key === "Enter"){
            if(userTaskValue){
                  addingItem(userTasksInput.value);
                  saveTasks()
                  this.value = "";
            } else{
                  alert("Fill Out The Input");
            }
      }
});

let addingItem = (UserTask, done = false) => {
      let taskItem = document.createElement("li");
      taskItem.innerHTML = `<span>${UserTask}</span> <i class="fa-solid fa-circle-xmark removed"></i>`;

      if (done) {
            taskItem.classList.add("done");
    }

      taskItem.addEventListener("click", function() {
            this.classList.toggle("done");
            saveTasks();
      });

      let removeIcon = taskItem.querySelector("i.removed");
      removeIcon.addEventListener("click", function(e) {
            e.stopPropagation();

            taskContainer.removeChild(taskItem);
            saveTasks();
      });

      taskContainer.appendChild(taskItem);
      saveTasks()
};

function saveTasks() {
      const tasks = [];
      taskContainer.querySelectorAll("li").forEach(taskItem => {
          tasks.push({
                text: taskItem.querySelector("span").textContent,
                done: taskItem.classList.contains("done")
            });
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
};

function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      
      tasks.forEach(task => {
            addingItem(task.text);
            if (task.done) {
                  taskContainer.lastChild.classList.add("done");
            };
      });
};

window.addEventListener("load", loadTasks);