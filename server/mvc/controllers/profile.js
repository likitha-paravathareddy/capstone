const profileModelCtrl=require('../models/profileModel')

async function profileRegistrationController(req,res){
    console.log(req.body)
    let profileData=profileModelCtrl.profileModel
    ({
        name:req.body.name,
        rollnumber:req.body.rollnumber,
        department: req.body.department,
        email: req.body.email,
        contact: req.body.contact,
        dob: req.body.dob,
        gender: req.body.gender,
        address: req.body.address,
        guardian_name: req.body.guardian_name,
        guardian_contact: req.body.guardian_contact,
        exam_name: req.body.exam_name,
        rank: req.body.rank      
    })
    // console.log(profile_data)
    profileModelCtrl.profileModel.find({ name:req.body.name,rollnumber:req.body.rollnumber, department: req.body.department, email: req.body.email, contact: req.body.contact,dob: req.body.dob,gender: req.body.gender, address: req.body.address,guardian_name: req.body.guardian_name,guardian_contact: req.body.guardian_contact,exam_name: req.body.exam_name,rank: req.body.rank }).then((resp) => {
        if (resp.length != 0) {
            res.send("1")
        }
        else {
            profileData.save().then(()=>{
                res.send("sent");
            }).catch((err)=>{
                res.send(err);
            })
            
        }
    })
}

async function profileDataFetching(req,res){
    profileModelCtrl.profileModel.find({}).then((docs)=>{
        if(docs)
        {
            res.send(docs)
        }
    }).catch((err)=>{
        res.send("bad request")
    });
}
        


module.exports={ profileRegistrationController , profileDataFetching }