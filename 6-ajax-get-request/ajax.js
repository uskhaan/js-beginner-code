$(function(){
    $("#load").click(sendAjax)
})
function sendAjax(){
    console.log("Sending Ajax Request")
    //send request here
    $.get("students.txt",handleResponse)
    console.log("Request Sent")
}
function handleResponse(response){
console.log("Response received and below it is:-")
console.log(response)
$("#result").empty()
$("#result").append(response)
}
