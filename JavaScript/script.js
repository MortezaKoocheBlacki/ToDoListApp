let userTasksInput = document.querySelector(".wrapper .userTask"),
taskContainer = document.querySelector(".tasks");

userTasksInput.addEventListener("keyup", function(e){
      if(e.key === "Enter"){
            if(userTasksInput.value){
                  addingItem(userTasksInput.value);
                  this.value = "";
            } else{
                  alert("Fill Out The Input");
            }
      }
});

let addingItem = (UserTask) => {
      let taskItem = document.createElement("li");
      taskItem.innerHTML = `${UserTask} <i class="fa-solid fa-circle-xmark"></i>`

      console.log(UserTask);

      taskItem.addEventListener("click", function() {
            this.classList.toggle("done");
      });

      taskContainer.appendChild(taskItem);
}