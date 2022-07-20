const taskEntered = document.getElementById('inputTask');
const addTask = document.getElementById('addTask');
const task = document.getElementsByClassName('task');
const list = document.querySelector('ul');
const todoList = []
const closeButton = document.getElementsByClassName('close');
console.log(closeButton);

//add listener to add button
addTask.addEventListener('click', function(event){
  let input = taskEntered.value;
  let newItem = document.createElement("li");
  
  if(input.length === 0){
    alert('Please Enter Task!');
  } else { 
    todoList.push(taskEntered.value);
  
    let li = document.createElement("li");
    let span = document.createElement("p")
    
    li.innerText = input;
    li.className += "task";
    list.appendChild(li);

    // let trash = document.createElement("i")
    // trash.classList += "bi bi-trash"

    span.className += "close";
    li.appendChild(span);
    // span.appendChild(trash);
    span.innerText = "x";
  }
  taskEntered.value = "";
  console.log(todoList);
})

list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);

document.addEventListener('click', function(e){
  if(e.target.className =='close'){
    let target = e.target;
    let targetParentText = target.parentNode.innerText;
    let targetParent = target.parentNode;
    let liIndex = todoList.indexOf(targetParentText);
    todoList.splice(liIndex,1);
    targetParent.parentNode.removeChild(targetParent);
  }
  console.log(todoList);
});

