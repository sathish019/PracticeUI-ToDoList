class Modal {
  constructor(toDoTaskArray) {
    this.toDoTasks = toDoTaskArray;
  }

  getToDoTaks() {
    return this.toDoTasks;
  }

  addToDoTaks(taskObject) {
    this.toDoTasks.push(taskObject);
    return this.toDoTasks;
  }

  removeToDoTask(taskIdTORemove) {
    this.toDoTasks = this.toDoTasks.filter(
      obj => obj.taskId !== parseInt(taskIdTORemove)
    );
  }

  changeTaskStatus(taskIdToBeChanged,taskStatus) {
    this.toDoTasks.forEach(element => {
      if(element.taskId == taskIdToBeChanged) {
        element.taskStatus = taskStatus;
      }
    });
  }
}
