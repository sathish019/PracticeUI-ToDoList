class Controller {
  constructor(modal, view) {
    this.modal = modal;
    this.view = view;
  }

  toDoListActions() {
    this.view.renderToDoList(this.modal.getToDoTaks());
    this.addNewTask();
    this.deleteOrChangeTask();
  }

  addNewTask() {
    document.getElementById("input").addEventListener("keyup", event => {
      if (event.keyCode == 13) {
        const toDo = event.target.value;

        if (toDo) {
          const newTaskList = this.modal.addToDoTaks({
            taskId: Math.floor(Math.random() * 100),
            taskName: toDo,
            taskStatus: false
          });
          document.getElementById("list").innerHTML = "";
          this.view.renderToDoList(newTaskList);
        }
      }
    });
  }

  deleteOrChangeTask() {
    document.getElementById("list").addEventListener("click", event => {
      const taskTODeleteOrChange = event.target;
      const arrayObjectToDeleteOrChange = taskTODeleteOrChange.getAttribute("id");
      if (taskTODeleteOrChange.classList.contains("de")) {
        taskTODeleteOrChange.parentElement.remove();
        this.modal.removeToDoTask(arrayObjectToDeleteOrChange);
      } else if (taskTODeleteOrChange.classList.contains("fa-circle-thin")) {
        this.view.setTaskStatus(event.target.parentElement, true);
        this.modal.changeTaskStatus(arrayObjectToDeleteOrChange, true);
      } else if (taskTODeleteOrChange.classList.contains("fa-check-circle-o")) {
        this.view.setTaskStatus(event.target.parentElement, false);
        this.modal.changeTaskStatus(arrayObjectToDeleteOrChange, false);
      }
    });
  }
}
