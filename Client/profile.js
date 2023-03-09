// var loadFile = function (event) {
//     var image = document.getElementById("output");
//     image.src = URL.createObjectURL(event.target.files[0]);
//   };
$(document).ready(function(){

  $("#submit-details").click(() =>
  {
    var name=JSON.parse(localStorage.getItem("student")).name
    var rollnumber=JSON.parse(localStorage.getItem("student")).studentId
    var department=JSON.parse(localStorage.getItem("student")).branch
    var email=JSON.parse(localStorage.getItem("student")).email
    var image
    var img=document.getElementById("file")
    var fd = new FormData();
    fd.append("file1", img.files[0]);
    // alert(img.files[0])
    $.ajax({
      type: "post",
      url: "http://localhost:8080/profile/upload",
      enctype: "multipart/form-data",
      contentType: false,
      processData: false,
      data: fd,
      xhrFields: {
        withCredentials: false,
      },
      headers: {},
      success: function (res) {
        image=res
        // alert(image)
   
    var contact = $("#contacta").val();
    var dob = $("#dob").val();
    var gender = $("#gender").val();
    var address = $("#address").val();
    var guardian_name = $("#gname").val();
    var guardian_contact = $("#gcontact").val();
    var exam_name= $("#exam").val();
    var rank = $("#examrank").val();

    var dat12={
      name:name,
      rollnumber:rollnumber,
      department:department,
      email:email,
      img:image,
      contact:contact,
      dob:dob,
      gender:gender,
      address:address,
      guardian_name:guardian_name,
      guardian_contact:guardian_contact,
      exam_name:exam_name,
      rank:rank
    }

    dat12=JSON.stringify(dat12)
    var url="http://127.0.0.1:8080/profile/reg"
    $.ajaxSetup({
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      }
   });
   $.post(url, dat12, function (xhr, status, responsnseText){
    // alert(responsnseText.responsnseText)

   })
  }
})
    
  })
})




