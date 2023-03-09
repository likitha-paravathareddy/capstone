$(document).ready(function(){
    var number
    var date
    $("#attend").click(function(){
        var branch=document.getElementById("dept").value
        var semester=document.getElementById("sem").value
        date=document.getElementById("date").value
        var url="http://127.0.0.1:8080/students/reg"
        $.get("http://127.0.0.1:8080/data/reg",function(data,status){
            for(let i=0;i<data.length;i++){
                if(branch==data[i].branch && semester==data[i].semester)
                {
                    number=data[i].numberOfPeriods
                }
            }
        })
        $.get(url,function(data,status){
            for(let i=0;i<data.length;i++){
                var template=`      <tr>
                <td>${data[i].name}</td>
                <td>${data[i].studentId}</td>`
                var temp=``
                for(let j=0;j<number;j++){
                    temp=temp+
                `<td><input class="form-check-input" type="checkbox" value="" id="${data[i].studentId}${j+1}"></td>`
                }
                template=template+temp+`</tr>`
                console.log(template)
                $("#stuattend").append(template)
            }
        })
        var x = document.getElementById("students");
        if (x.style.display === "none") {
          x.style.display = "flex";
        } else {
          x.style.display = "none";
        }
    })
    $("#post").click(function(){
        
        $.get("http://127.0.0.1:8080/students/reg",function(data,status){
            for(let i=0;i<data.length;i++){
                var bools=[]
                for(let j=0;j<number;j++){
                    var s=(j+1).toString()
                    var id=data[i].studentId+s
                    bools.push(document.getElementById(id).checked)
                }
                var rollNumber=data[i].studentId
                var sub=bools
                data23={
                    date:date,
                    rollNumber:rollNumber,
                    sub:sub
                }
                data23=JSON.stringify(data23)
                var url="http://127.0.0.1:8080/attendance/reg"
        $.ajaxSetup({
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
            }
         });
        $.post(url, data23, function (xhr, status, responseText) {
            alert(responseText.responseText)
        })
            }
        })
    })

})