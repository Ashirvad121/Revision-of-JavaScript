function addTask(){
    const taskInput=document.getElementById("taskInput");
    const taskList=document.getElementById("taskList");

    const taskInputText=taskInput.value;
    if(taskInputText != ""){
        const taskListItems=document.createElement("li");
        taskListItems.innerText=taskInputText
        taskList.append(taskListItems);
        taskInput.value="";
    }
    
}


document.getElementById("taskInput").addEventListener("keydown", function(event){
    if(event.key=="Enter"){
        addTask();
    }
})