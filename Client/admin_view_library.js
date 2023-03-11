$(document).ready(function(){
    var url="http://127.0.0.1:8080/books/reg"
    $.get(url,function(data,status){
        for(let i=0;i<data.length;i++){
            
            $("#libadd").append(`<tr>
            
            <td>${data[i].book_name}</td>
            <td>${data[i].author_name}</td>
            <td>${data[i].publisher}</td>
            <td>${data[i].genres}</td>
            
            <td>${data[i].quantity}</td>
            <td>${data[i].price}</td>
            </tr>`)
        }
    })
})