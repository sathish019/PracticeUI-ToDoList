class View {
  constructor(listContainer) {
    this.list = listContainer;
  }

  //render the array of tasks
  renderToDoList(toDoTasks) {
    const list = document.getElementById(this.list);
    toDoTasks.forEach((value, index) => {
      /* const check = "fa-check-circle-o";
      const uncheck = "fa-circle-thin";
      const linethrough = "font-st-lthrough";

      const status = value.taskStatus ? check : uncheck;
      const strikeThrough = value.taskStatus ? linethrough : ""; */

      const item = document.createElement("li");
      item.classList.add("item");
      
      const lineItem1 = document.createElement("i");
      lineItem1.classList.add("fa","co");
      //lineItem1.classList.add(status);
      lineItem1.setAttribute("id", value.taskId);

      const lineItem2 = document.createElement("p");
      /* if(strikeThrough===linethrough){
        lineItem2.classList.add(strikeThrough);
      } */
      lineItem2.classList.add("text");
      const taskDescription = document.createTextNode(value.taskName);
      lineItem2.append(taskDescription);

      const lineItem3 = document.createElement("i");
      lineItem3.classList.add("fa", "fa-trash-o", "de");
      lineItem3.setAttribute("id", value.taskId);
      
      item.classList.add("dp-flex");
      item.appendChild(lineItem1);
      item.appendChild(lineItem2);
      item.appendChild(lineItem3);

      //
      this.setTaskStatus(item,value.taskStatus);

      list.appendChild(item);
    });
  }

  setTaskStatus(item,status) {

    //const lineItem1 = item.children[0], lineItem2 = item.children[1];
    const [lineItem1,lineItem2] = item.children;
    if(status) {
      lineItem1.classList.add("fa-check-circle-o");
      lineItem1.classList.remove("fa-circle-thin");
      lineItem2.classList.add("font-st-lthrough");
    }
    else {
      lineItem1.classList.remove("fa-check-circle-o");
      lineItem1.classList.add("fa-circle-thin");
      lineItem2.classList.remove("font-st-lthrough");
    }
  }

}