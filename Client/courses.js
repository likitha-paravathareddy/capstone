$("documnet").ready(async function () {
    $.ajaxSetup({
        beforeSend: function(xhr) {
            xhr.setRequestHeader('token',localStorage.getItem('token'));
        }
    });
    console.log("hello")


    var sub
    await $.get("http://localhost:8080/department/reg", function (data) {
        
        //console.log(data)
        //console.log("hey")
        for(i=0;i<data.length;i++)
        {
            console.log("bye")
            //console.log(data[0])
            if(data[i].departmentName == 'cse')
            {
            sub = data[i].semester1
            }
        }

       
        // parent = document.getElementById("parent");
        // places_card = data;
        // for (i = 0; i < places_card.length; i++) {
        //   let templateString =
        //     '<div class="col-lg-4 my-3 col-md-6 d-flex align-items-stretch"><div class="card shadow-sm"><img src=' +
        //     places_card[i].imgSrc +
        //     ' alt="cg"><rect width="100%" height="100%" fill="#55595c"/><div class="card-body height" style="background-color: white;"><h3 style="color: black;">' +
        //     places_card[i].Destination +
        //     "</h3>" +
        //     '<p class="card-text1" style="color: black;">' +
        //     places_card[i].Description.substring(0, 100) +
        //     " ..." +
        //     "</p>" +
        //     '<div class="d-flex justify-content-between align-items-center">' +
        //     '<div class="btn-group">' +
        //     '<button type="button" class="btn btn-sm btn-outline-secondary" style="background-color: #28a745; color: white;" onclick="show_place(this)">View</button>' +
        //     "</div>" +
        //     '<small class="text-muted"></small>' +
        //     "</div>" +
        //     "</div>" +
        //     "</div>" +
        //     "</div>";
        //   parent.innerHTML = parent.innerHTML + templateString;
        // }
      });
      console.log(sub)
     // card = document.getElementById("cards")
      await $.get("http://localhost:8080/courses/reg", function (data) {
        
        //console.log(data)
        //console.log("hey")
        for(i=0;i<data.length;i++)
        {
            course = data[i].courseName
            num = sub.indexOf(course)
          if(num>0)
          {
            templateString = '<div class="col-md-4 col-sm-6 content-card">'+
            '<div class="card-big-shadow">'+
                '<div class="card card-just-text" data-background="color" data-color="blue" data-radius="none">'+
                    '<div class="content">'+
                        '<h6 class="category">'+
                        data[i].courseName
                        '</h6>'+
                        '<h4 class="title"><a href="#">Blue Card</a></h4>'+
                        '<p class="description">What all of these have in common is that theyre pulling information out of the app or the service and making it relevant to the moment. </p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>';
            
        $("#cards").append(templateString);
          }
        }
    })


      







    });