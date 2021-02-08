function handleAdd(){
    console.log("This btn transfers field input to the list");
    var newToDo=document.getElementById("newToDo").value;
    var toDoList=document.getElementById("toDoList");
    var newToDoText=document.createTextNode(newToDo);
    var newLi=document.createElement("li");
    newLi.appendChild(newToDoText);
    toDoList.appendChild(newLi);

}

window.onload=function(){
    var btn=document.getElementById("btnAdd");
    btn.onclick=handleAdd;
}

function handleDel(e){
    var tag= e.target;
    var li= tag.parentNode;
    li.parentNode.removeChild(li);

}
