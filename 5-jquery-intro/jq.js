$(function(){
    //jq will execute this function after page load
    //so do your bindings here
    $("#addButton").click(handleBtnClick)
    $("#todos").on("click","li",removeLi)
})

function handleBtnClick(){
    var newTodo=$("#newTodo").val()
    if(!newTodo){
        $("#newTodo").addClass("error")
        return
    }
    $("#newTodo").removeClass("error")
    $("#newTodo").val("")
    $("#todos").append("<li>"+newTodo+"</li>")
}
function removeLi(){
    $(this).fadeOut()
    //.remove()
}