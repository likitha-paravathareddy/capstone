const que = document.getElementById("submit");
que.addEventListener("click", () => {
    console.log("hello")
  studentId = document.getElementById("student_id").value;
  semester = document.getElementById("sem").value;
  subjectName = document.getElementById("subject").value;
  marks = document.getElementById("marks").value;
  percentage =  marks;
  grade = document.getElementById("grade").value;
  document.getElementById("student_id").value = "";
  document.getElementById("sem").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("marks").value = "";
  document.getElementById("grade").value = "";

  data = {
    studentId: studentId,
    semester: semester,
    subjectName: subjectName,
    marks: marks,
    percentage: percentage,
    grade:grade
  };
  obj1 = JSON.stringify(data);

  // $.post("http://localhost:3008/queries/res",data,
  // function(result)
  // {
  //   console.log(result)
  // });
  $.ajax({
    type: "post",
    url: "http://localhost:8080/result/postResults",
    contentType: "application/json",
    data: JSON.stringify(data),
    xhrFields: {
      withCredentials: false,
    },
    headers: {},
    success: function (res) {
      console.log(res);
    },
    error: function () {
      console.log("We are sorry but our servers are having an issue right now");
    },
  });

  /*var xhttp=new XMLHttpRequest()
  xhttp.open("POST","http://localhost:3008/queries",true)
  xhttp.setRequestHeader("content-type","application/json")
  xhttp.onreadystatechange=function(){

      if(this.readyState==4)
      {
          var response=this.responseText
          console.log(response)
      }
  }
  xhttp.send(obj1)*/
});