const toDoTasks = [
  {
    taskId: Math.floor(Math.random()*100),
    taskName: "Project discussion",
    taskStatus: true
  },
  {
    taskId: Math.floor(Math.random()*100),
    taskName: "Team lunch",
    taskStatus: true
  },
  {
    taskId: Math.floor(Math.random()*100),
    taskName: "Conference",
    taskStatus: false
  }
];
const modal = new Modal(toDoTasks);

const listItems = "list";
const view = new View(listItems);

let startToDoList = new Controller(modal, view);
startToDoList.toDoListActions();