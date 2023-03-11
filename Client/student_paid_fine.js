$(document).ready(function(){
    var url="http://127.0.0.1:8080/books/fine"
    $.get(url,function(data,status){
        for(let i=0;i<data.length;i++){
            
            $("#libadd2").append(`<tr>
            <td>${data[i].user_id}</td>
            <td>${data[i].book_name}</td>
            <td>${data[i].paidDate}</td>
            </tr>`)
        }
    })
})