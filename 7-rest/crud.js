$(function(){
loadRecipies()
$("#recipes").on("click",".btn-danger",handleDelete)
$("#addBtn").click(addRecipie){
})

function addRecipie(title,body){
    var title=$("#title").val()
    var title=$("#body").val()
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/recipes",
        method: "POST",
        data: {title,body},
        success: function(response){
            console.log(response)
            loadRecipies()
        }
    })
}