const addList= document.querySelector("#btn")
const addTasks= document.querySelector("#taskList")
const clearAll= document.querySelector("#clear")

addList.addEventListener("click",() =>{
        const existingInputs = document.querySelectorAll("#taskList input[type='text']");

    for (const input of existingInputs) {
        if (input.value.trim() === "") {
            window.alert("Add your task first");
            input.focus();
            return;
        }
    }
    
    const list= document.createElement("li")

    const taskName= document.createElement("input")
    taskName.type="text"
    taskName.placeholder = "Enter the task"

    const taskStatus= document.createElement("input")
    taskStatus.type= "checkbox"

    const removeTask= document.createElement("button")
    removeTask.classList.add("remove")
    removeTask.textContent="X"
    
    list.append(taskStatus, taskName, removeTask)
    addTasks.appendChild(list)

    taskStatus.addEventListener("change", () =>{
    taskStatus.classList.toggle("check")
    });

    removeTask.addEventListener("click", () =>{
    addTasks.removeChild(list)
    });

    taskName.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            taskName.setAttribute("readonly", true);
            taskName.blur();
        }
    });
});

clearAll.addEventListener("click", ()=>{
    if(window.confirm("Are you sure you want to remove all the tasks?"))
        {addTasks.innerHTML=''
    }else{
        window.alert("Clear action denied");
    }
})

