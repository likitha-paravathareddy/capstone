var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  $("#submit-details").click(() =>
  {
    contact = $("#contact").val();
    dob = $("#dob").val();
    gender = $("#gender").val();
    address = $("#address").val();
    gname = $("#gname").val();
    gcontact = $("#gcontact").val();
    exam = $("#exam").val();
    rank = $("#examrank").val();
    
  })

  function submitDetails()
  {
    var data =
    {
      contact: $("#contact").val(),
    dob: $("#dob").val(),
    gender: $("#gender").val(),
    address: $("#address").val(),
    gname: $("#gname").val(),
    gcontact: $("#gcontact").val(),
    exam: $("#exam").val(),
    rank: $("#examrank").val()
    }
    $.ajax({
      type: "post",
      url: "http://localhost:8080/profile",
      contentType: "application/json",
      data: JSON.stringify(data),
      xhrFields: {
        withCredentials: false,
      },
      
    });
  }



