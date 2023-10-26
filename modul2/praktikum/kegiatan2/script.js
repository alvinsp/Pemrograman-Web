document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task!!");
  } else {
    const newTask = document.createElement("div");
    newTask.classList.add("task");

    newTask.innerHTML = `
      <span id="taskname">${
        document.querySelector("#newtask input").value
      }</span>
      <button class="delete"><img class="delete-img" src="assets/trash-bin.png"></button>
      <button class="edit"><img class="edit-img" src="assets/pen.png"></button>
    `;

    document.querySelector("#tasks").appendChild(newTask);
    
    newTask.querySelector(".delete").onclick = function () {
      this.parentNode.remove();
    };

    newTask.querySelector(".edit").onclick = function () {
      const taskName = this.parentNode.querySelector("#taskname");
      const newTaskName = prompt("Edit task:", taskName.textContent);

      if (newTaskName !== null) {
        taskName.textContent = newTaskName;
      }
    };

    document.querySelector("#newtask input").value = "";
  }
};
