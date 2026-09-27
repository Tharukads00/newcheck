// ===== YOUR TASK =====
// Build the to-do list: add a task when the button is clicked, with a
// "Done" button on each task that removes it.
// Full details are in the problem description.
//
const input = document.querySelector('input#taskInput');
const button = document.querySelector('button#addButton');
const list = document.querySelector('#todoList');





function addTask() {
    
    var inp = input.value;

    if (inp == ""){
        return
    }

    var taskItem = document.createElement('li');
    taskItem.textContent = inp;
    list.append(taskItem);
    input.focus();
    input.value = "";

    var doneBtn =  document.createElement('button');
    doneBtn.textContent = "Done"

    function removeTask(){
        taskItem.remove();
    }

    doneBtn.addEventListener("click", removeTask)
    taskItem.append(doneBtn);

}

button.addEventListener("click", addTask);
