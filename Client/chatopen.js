$(document).ready(function(){
   
    $("#joinchat").click(function(){
        alert("clicked")
        var name=document.getElementById("username").value
        var room=document.getElementById("room").value
    
        var link="chat.html"+"#"+name+"#"+room
        alert(link)
        window.open(link)
            })
})