$.ajaxSetup({
    beforeSend: function (xhr) {
      xhr.setRequestHeader("token", localStorage.getItem("token"));
    },
  });

  k = window.location.hash;
  console.log(k)
subject = k.substring(1);
console.log(subject)

cou = document.getElementById("cou");
//console.log(cou)

$.get("http://localhost:8080/courses/reg", function(data){

  for(i=0;i<data.length;i++)
  {
    if(data[i].courseName==subject)
    {
        links = data[i].link
        for(j=0;j<links.length;j++)
        {
            if(j==0)
            {
                console.log(links[j])
                templateString = ' <div class="item active">'+
                '<div class="embed-responsive embed-responsive-16by9">'+
                  '<iframe class="embed-responsive-item" id = "video" src='+
                  links[j]+
                  '></iframe>'+
                '</div>'+
              '</div>';
            }
            else{
            templateString = ' <div class="item">'+
                '<div class="embed-responsive embed-responsive-16by9">'+
                  '<iframe class="embed-responsive-item" src="'+
                  links[j]+
                  '"></iframe>'+
                '</div>'+
              '</div>';
              
            }
            cou.append(templateString);

            
        }
    }
  }
});