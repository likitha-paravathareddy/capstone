$(document).ready(function(){
    var url="http://127.0.0.1:8080/payments/reg"
    $.get(url,function(data,status){
        console.log(data)
        for(let i=0;i<data.length;i++){
          
           
                $("#payadd").append(`   <tr><td>${data[i].studentId}</td>
                <td>${data[i].studentName}</td>
                <td>${data[i].branch}</td>
                <td>${data[i].semester}</td>
                <td>${data[i].amount}</td>
                <td>${data[i].paid}</td>
                <td>${data[i].due}</td>`)
            }
        

    })
})