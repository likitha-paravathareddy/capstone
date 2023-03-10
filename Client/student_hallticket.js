$(document).ready(async function(){

    rollNo = JSON.parse(localStorage.getItem("student")).studentId;
    name1 = JSON.parse(localStorage.getItem("student")).name;
    branch = JSON.parse(localStorage.getItem("student")).branch;
    semester = JSON.parse(localStorage.getItem("student")).semester;

    

    dues=[]
      await $.get("http://localhost:8080/payments/reg",function(data1,status){
            //console.log(data1[0].paid)
            //console.log("heli")
            for(i=0;i<data1.length;i++)
            {
              //console.log("heli")
              //console.log(data1[i].paid)
            if(data1[i].paid == 0)
            {
              dues.push(data1[i].studentId)
             // num = sub.indexOf(course)

            }
          }
          })

          if(dues.indexOf(rollNo)<0)
          {
            document.getElementById("notpaid").innerHTML = '<H1 style="color:red">CLEAR YOUR DUES TO VIEW  HALLTICKET</H1>'
          }
          else
          {
                document.getElementById("details").innerHTML = ` <tr>
                <td><b>ENROLLMENT NO : ${rollNo}</b></td>
                <td><b>department: </b> ${branch}</td>
              </tr>
              <tr>
                <td><b>Student Name: </b>${name1}</td>
                <td><b>Sem: </b>${semester}</td>
              </tr>`;

              $.get("http://localhost:8080/hallticket/reg",function(data,status){
                for(i=0;i<data.length;i++)
                {
                    console.log(data[i].branch)
                    if(data[i].branch == branch && data[i].semester==semester)
                    {
                        console.log("hello")
                        for(j=0;j<data[i].subjects.length;j++)
                        {
                            console.log(data[i].subjects[j].name)
                             template1 = `<tr>
                            <td>${j}</td>
                            <td>${data[i].subjects[j].name}</td>
                            <td>${data[i].subjects[j].date}</td>
                          </tr>`;
                          //ocument.getElementById("exam").append(template1)
                          $("#exam").append(template1)
                        }
                    }
                }
              })


          }

})