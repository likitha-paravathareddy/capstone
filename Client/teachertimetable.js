$(document).ready(function(){
    var url="http://127.0.0.1:8080/teachtimetables/reg"
    var faculty=localStorage.getItem("faculty")
    $.get(url,function(data,err){
        for(let i=0;i<data.length;i++)
        {
            if(data[i].name==faculty)
            {
                document.getElementById("mon01").innerHTML=data[i].monday[0]
                document.getElementById("mon001").innerHTML=data[i].monday[1]
                document.getElementById("mon02").innerHTML=data[i].monday[2]
                document.getElementById("mon002").innerHTML=data[i].monday[3]
                document.getElementById("mon03").innerHTML=data[i].monday[4]
                document.getElementById("mon003").innerHTML=data[i].monday[5]
                document.getElementById("mon04").innerHTML=data[i].monday[6]
                document.getElementById("mon004").innerHTML=data[i].monday[7]
                document.getElementById("tue01").innerHTML=data[i].tuesday[0]
                document.getElementById("tue001").innerHTML=data[i].tuesday[1]
                document.getElementById("tue02").innerHTML=data[i].tuesday[2]
                document.getElementById("tue002").innerHTML=data[i].tuesday[3]
                document.getElementById("tue03").innerHTML=data[i].tuesday[4]
                document.getElementById("tue003").innerHTML=data[i].tuesday[5]
                document.getElementById("tue04").innerHTML=data[i].tuesday[6]
                document.getElementById("tue004").innerHTML=data[i].tuesday[7]
                document.getElementById("wed01").innerHTML=data[i].wednesday[0]
                document.getElementById("wed001").innerHTML=data[i].wednesday[1]
                document.getElementById("wed02").innerHTML=data[i].wednesday[2]
                document.getElementById("wed002").innerHTML=data[i].wednesday[3]
                document.getElementById("wed03").innerHTML=data[i].wednesday[4]
                document.getElementById("wed003").innerHTML=data[i].wednesday[5]
                document.getElementById("wed04").innerHTML=data[i].wednesday[6]
                document.getElementById("wed004").innerHTML=data[i].wednesday[7]
                document.getElementById("wed05").innerHTML=data[i].wednesday[8]
                document.getElementById("wed005").innerHTML=data[i].wednesday[9]
                document.getElementById("thu01").innerHTML=data[i].thursday[0]
                document.getElementById("thu001").innerHTML=data[i].thursday[1]
                document.getElementById("thu02").innerHTML=data[i].thursday[2]
                document.getElementById("thu002").innerHTML=data[i].thursday[3]
                document.getElementById("thu03").innerHTML=data[i].thursday[4]
                document.getElementById("thu003").innerHTML=data[i].thursday[5]
                document.getElementById("thu04").innerHTML=data[i].thursday[6]
                document.getElementById("thu004").innerHTML=data[i].thursday[7]
                document.getElementById("thu05").innerHTML=data[i].thursday[8]
                document.getElementById("thu005").innerHTML=data[i].thursday[9]
                document.getElementById("fri01").innerHTML=data[i].friday[0]
                document.getElementById("fri001").innerHTML=data[i].friday[1]
                document.getElementById("fri02").innerHTML=data[i].friday[2]
                document.getElementById("fri002").innerHTML=data[i].friday[3]
                document.getElementById("fri03").innerHTML=data[i].friday[4]
                document.getElementById("fri003").innerHTML=data[i].friday[5]
                document.getElementById("fri04").innerHTML=data[i].friday[6]
                document.getElementById("fri004").innerHTML=data[i].friday[7]
            }
        }
    })
})