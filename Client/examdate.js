

$("#go").click(() => {
    console.log("dfghj")
    branch =document.getElementById("branch").value;
    sem = document.getElementById("sem").value;

   // document.getElementById("branch")="";
    //document.getElementById("semester")="";


    $.ajaxSetup({
        beforeSend: function(xhr) {
            xhr.setRequestHeader('token',localStorage.getItem('token'));
        }
    });
    //console.log(branch)
    $.get(`http://localhost:8080/department/reg`,function (data) {
        console.log(data)

            for(i=0;i<data.length;i++)
            {
               // console.log(branch)
                if(data[i].departmentName==branch)
                {
                   // console.log("hiii")
                    //console.log(sem)
                    console.log(data[i][sem])
                    break;

                }
            }
            //console.log(i)
            //console.log(data[i][sem])
            subj = data[i][sem]
            for(j=0;j<data[i][sem].length;j++)
            {
                console.log("sayui")
                template = ` <div class="col-md-6">
                <div class="form-group mb-3">
                    <label for="example-select">Subject</label>
                    <select class="form-control" id="subject">
                      <option value = ${subj[j]}>${subj[j]}</option>
                     
                    </select>
                  </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-3">
                <label for="example-email">Date</label>
                <input type="date" id="doe" name="doe" class="form-control" placeholder="Date Of Exam">
            </div>
              </div>` ;
               $("#display").append(template);
            }
            
    })

})