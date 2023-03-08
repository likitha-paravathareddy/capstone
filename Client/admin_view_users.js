$(document).ready(function(){

    var url="http://127.0.0.1:8080/students/reg"
    $.get(url,function(data,status){
        console.log(data)
        for(let i=0;i<data.length;i++)
        {
        $("#views").append(`    <tr>
        <td>${data[i].studentId}</td>
        <td>${data[i].name}</td>
        <td>${data[i].email}</td>
        <td>${data[i].branch}</td>
        <td>${data[i].semester}</td>
      </tr>`)
        }
    })
})