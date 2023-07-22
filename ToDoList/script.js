function addTask(){
    const taskInput=document.getElementById("taskInput");
    const taskList=document.getElementById("taskList");

    const taskInputText=taskInput.value;
    if(taskInputText != ""){
        const taskListItems=document.createElement("li");
        taskListItems.innerText=taskInputText
        
        //now we have to attach delete button
        const deleteButton= document.createElement("button");
        deleteButton.innerText="Delete";
        deleteButton.addEventListener("click", function(){
            taskList.removeChild(taskListItems);
            updateLocalStorage();// update local storage after deleting a task
        });
        //append the delete button to the taskListItem
        taskListItems.appendChild(deleteButton);
        //now append taskListItem to taskList
        taskList.appendChild(taskListItems);
        taskInput.value="";
        updateLocalStorage();//update local storage after adding a task
    }
    
}

function updateLocalStorage(){
    const task=[];
    const taskItems=document.querySelectorAll("#taskList li");
    //Get the content of each task items and add it to the task array
    taskItems.forEach((taskItems)=> {
        task.push(taskItems.childNodes[0].textContent);
    });
    localStorage.setItem("tasks",JSON.stringify(task));
}

document.getElementById("taskInput").addEventListener("keydown", function(event){
    if(event.key=="Enter"){
        addTask();
    }
})

function loadTasksFromLocalStorage(){
    const tasks= JSON.parse(localStorage.getItem("tasks"));
    if(tasks && tasks.length > 0){
        const taskList = document.getElementById("taskList");
        tasks.forEach((taskText)=>{
            const taskListItems=document.createElement("li");
            taskListItems.innerText=taskText;
            const deleteButton = document.createElement("button");
            deleteButton.innerText="Delete";
            deleteButton.addEventListener("click",function(){
                taskList.removeChild(taskListItems);
                updateLocalStorage();
            });

            taskListItems.append(deleteButton);
            taskList.append(taskListItems);
        });
    }
}

loadTasksFromLocalStorage();