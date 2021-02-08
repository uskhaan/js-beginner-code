function handleAddNewToDo(){
    console.log("This ToDo button handled")
}

window.onload=function(){
    var btn=document.getElementById("btnAdd")
    btn.onclick=handleAddNewToDo
}