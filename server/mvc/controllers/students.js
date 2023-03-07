const studentModelCtrl=require('../models/studentModel')

async function studentRegistrationController(req,res){
    let branchcodes={
        "cse":505,
        "ece":506,
        "eee":507,
        "mech":508,
        "civil":509,
        "it":510
      }

    var studentId="19"+(branchcodes[req.body.branch]).toString()+(Math.floor(100+Math.random()*900)).toString()
    let studentData=studentModelCtrl.studentModel({
        name:req.body.name,
        branch:req.body.branch,
        semester:req.body.semester,
        email:req.body.email,
        studentId:studentId,
        password:hashedpassword

    });      
            studentData.save((err, result) => {
                if (err) {
                    res.send("something went wrong")
                }
                else {
                    res.send("student added succesfully")
                }
            })
        
}

async function studentDataFetching(req,res){
    studentModelCtrl.studentModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}

module.exports={ studentRegistrationController , studentDataFetching}