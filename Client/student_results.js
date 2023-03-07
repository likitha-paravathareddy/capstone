$("#sub1").click(() => {
   // console.log("hii")
    sem = document.getElementById("sem").value;
    //console.log(sem)



  
    $.ajaxSetup({
        beforeSend: function(xhr) {
            xhr.setRequestHeader('token',localStorage.getItem('token'));
        }
    });


    console.log("hello")
  student = localStorage.getItem('student');
  //studentId = student.studentId
  console.log(student)
  


  $.get(
    `http://localhost:8080/result/getResults/${student}`,
    function (data) {
     console.log(data);
      for (i = 0; i < data.length; i++) {
        console.log("hello")
        if(data[i].semester==sem)
        //console.log(semester)
        {
        templateString =
        
                '<tr>'+
					'<td>'+
                    data[i].subjectName +
                    '</td>'+
					'<td>'+
                    data[i].marks+
                    '</td>'+
					'<td>100</td>'+
					'<td>'+
                    data[i].percentage+
                    '%</td>'+
					'<td class="grade-b">'+
                    data[i].grade+
                    '</td>'+
				'</tr>';
			
			
       
    
        $("#results").append(templateString);
        }
      }
    }
  );
})