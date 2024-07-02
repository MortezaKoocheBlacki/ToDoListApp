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
      taskItem.innerHTML = `<span>${UserTask}</span> <i class="fa-solid fa-circle-xmark removed"></i>`

      taskItem.classList.add("added");

      taskItem.addEventListener("click", function() {
            this.classList.toggle("done");
      });

      let removeIcon = taskItem.querySelector("i.removed");
      removeIcon.addEventListener("click", function(e) {
            // Stop event propagation to prevent toggling the "done" class
            e.stopPropagation();

            // Add class to trigger fade-out animation
            taskItem.classList.add("removed");

            // Wait for the animation to complete before removing the element
            taskItem.addEventListener("transitionend", function() {
                taskContainer.removeChild(taskItem);
            }, { once: true });
      });

      taskContainer.appendChild(taskItem);

      // Trigger reflow to ensure the animation runs
      window.getComputedStyle(taskItem).opacity;
};