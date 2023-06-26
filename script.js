function addTask() {

    let newTask = document.getElementById("new-task").value;
   

    let li = document.createElement("li");
    li.innerText = newTask;
   

    document.getElementById("task-list").appendChild(li);
   

    document.getElementById("new-task").value = "";
   }