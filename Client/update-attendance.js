$(document).ready(function(){
    $("#attend").click(function(){
        var url="http://127.0.0.1:8080/students/reg"
        $.get(url,function(data,status){
            for(let i=0;i<data.length;i++){
                $("#stuattend").append(`      <tr>
                <td>${data[i].name}</td>
                <td>${data[i].studentId}</td>
                <td><input class="form-check-input" type="checkbox" value="" id="${data[i].studentId}1"></td>
                <td><input class="form-check-input" type="checkbox" value="" id="${data[i].studentId}2"></td>
                <td><input class="form-check-input" type="checkbox" value="" id="${data[i].studentId}3"></td>
                <td><input class="form-check-input" type="checkbox" value="" id="${data[i].studentId}4"></td>
                <td><input class="form-check-input" type="checkbox" value="" id="${data[i].studentId}5"></td>                        
                </tr>`)
            }
        })
        var x = document.getElementById("students");
        if (x.style.display === "none") {
          x.style.display = "flex";
        } else {
          x.style.display = "none";
        }

    })
})