$(document).ready(function(){
    $("#get").click(function(){
        var branch=document.getElementById("branch").value;
        var semester=document.getElementById("semester").value;

        var url = 'http://127.0.0.1:8080/stutimetables/reg';
    
    
      $.get(url,function(data,status){
        for(let i=0;i<data.length;i++)
        {
            if(branch==data[i].branch && semester==data[i].semester)
            {
                document.getElementById("mon1").innerHTML=data[i].monday[0],
                document.getElementById("mon2").innerHTML=data[i].monday[1],
                document.getElementById("mon3").innerHTML=data[i].monday[2],
                document.getElementById("mon4").innerHTML=data[i].monday[3],
                document.getElementById("tue1").innerHTML=data[i].tuesday[0],
                document.getElementById("tue2").innerHTML=data[i].tuesday[1],
                document.getElementById("tue3").innerHTML=data[i].tuesday[2],
                document.getElementById("tue4").innerHTML=data[i].tuesday[3],
                document.getElementById("wed1").innerHTML=data[i].wednesday[0],
                document.getElementById("wed2").innerHTML=data[i].wednesday[1],
                document.getElementById("wed3").innerHTML=data[i].wednesday[2],
                document.getElementById("wed4").innerHTML=data[i].wednesday[3],
                document.getElementById("wed5").innerHTML=data[i].wednesday[4],
                document.getElementById("thu1").innerHTML=data[i].thursday[0],
                document.getElementById("thu2").innerHTML=data[i].thursday[1],
                document.getElementById("thu3").innerHTML=data[i].thursday[2],
                document.getElementById("thu4").innerHTML=data[i].thursday[3],
                document.getElementById("thu5").innerHTML=data[i].thursday[4],
                document.getElementById("fri1").innerHTML=data[i].friday[0],
                document.getElementById("fri2").innerHTML=data[i].friday[1],
                document.getElementById("fri3").innerHTML=data[i].friday[2],
                document.getElementById("fri4").innerHTML=data[i].friday[3]
            }
        }

      });
      var urlse='http://127.0.0.1:8080/'
      var urls='http://127.0.0.1:8080/faculty/reg'
      $.get(urls,function(data,status){
        for()
      });
    })
})