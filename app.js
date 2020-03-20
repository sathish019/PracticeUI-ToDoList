const toDoTasks = [{
    taskId: 1,
    taskName: "Project discussion",
    taskStatus: true
},
{   
    taskId: 2,
    taskName: "Team lunch",
    taskStatus: true
},
{
    taskId: 3,
    taskName: "Conference",
    taskStatus: false
}]; 

const list = document.getElementById("list");
const input = document.getElementById("input");

const check = "fa-check-circle-o";
const uncheck = "fa-circle-thin";
const linethrough = "font-st-lthrough";

function addToDo(toDo, id, completed,trash){  
    
  const status =  completed ? check : uncheck;
  const strikeThrough = completed ? linethrough : "";

  const item = `<li class="item">
                  <i class="fa ${status} co" job="complete" id="${id}"></i>
                  <p class="text ${strikeThrough}">${toDo}</p>
                  <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                </li>`;
  const position = "beforeend";  
  list.insertAdjacentHTML(position,item);

  
}
//addToDo("Coffee", 1, true, false);

//render the array of tasks
const deleteTask = false;
toDoTasks.forEach((value,index)=>{
  addToDo(value.taskName,value.taskId,value.taskStatus,deleteTask);    
});

//add new task
input.addEventListener("keyup",(event) => {
  if(event.keyCode == 13){
    
    const toDo = event.target.value;
    let  toDoCount = toDoTasks.length;
     
    if(toDo){
      toDoTasks.push(addToDo(toDo, toDoCount, false, false));
    } 
  }  
});

//delete a task
const delStatus = list.getElementsByClassName("de"); 
    
   for (var i = 0; i < delStatus.length; i++) {
    delStatus[i].addEventListener('click', () => {
       const listToDelete = delStatus[i].parentNode;
       alert(listToDelete);
    });
}


