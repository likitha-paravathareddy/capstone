const coursesModelCtrl=require('../models/coursesModel')

async function coursesRegistrationController(req,res){
    console.log(req.body)
    let coursesData=coursesModelCtrl.coursesModel
    ({
        courseName:req.body.courseName,
        departmentName:req.body.departmentName,
        curriculum : req.body.curriculum,
        assignedTeachers : req.body.assignedTeachers
    })
    // console.log(subjectCode_data)
  
            coursesData.save().then(()=>{
                res.send("sent");
            }).catch((err)=>{
                res.send(err);
            })
            
        
}

async function coursesDataFetching(req,res){
    coursesModelCtrl.coursesModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}


module.exports={ coursesRegistrationController , coursesDataFetching }