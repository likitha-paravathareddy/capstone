const logn = document.getElementById("submit");
logn.addEventListener("click", () => {
    console.log("hello")
  studentId = document.getElementById("studentId").value;
  password = document.getElementById("password").value;
 
  document.getElementById("studentId").value = "";
  document.getElementById("password").value = "";

  //localStorage.setItem('studentId', studentId);

  login(studentId, password);})
  


 

  function login(studentId, password) {
    var data = {
      studentId: studentId,
      password: password,
    };
      $.ajax({
        type: "post",
        url: "http://localhost:8080/api/users/login",
        contentType: "application/json",
        data: JSON.stringify(data),
        xhrFields: {
          withCredentials: false,
        },
        headers: {},
        success: function (res) {
            console.log("hello")
            localStorage.setItem("student", res.user.studentId);
            localStorage.setItem("token", res.token);
            window.location.href="index.html"
        },
        error: function () {
          console.log(
            "We are sorry but our servers are having an issue right now"
          );
        }
      });
    }
    