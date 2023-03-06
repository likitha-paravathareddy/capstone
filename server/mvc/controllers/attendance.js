const attendanceModelCtrl=require('../models/attendanceModel')

async function attendanceRegistrationController(req,res){
    console.log(req.body)
    let attendanceData=attendanceModelCtrl.attendanceModel
    ({
        date:req.body.date,
        rollNumber:req.body.rollNumber,
        sub1: req.body.sub1,
        sub2: req.body.sub2,
        sub3: req.body.sub3,
        sub4: req.body.sub4,
        sub5: req.body.sub5,
        sub6: req.body.sub6        
    })
    // console.log(attendance_data)
    attendanceModelCtrl.attendanceModel.find({ date:req.body.date, rollNumber:req.body.rollNumber, sub1: req.body.sub1, sub2: req.body.sub2, sub3: req.body.sub3, sub4: req.body.sub4, sub5: req.body.sub5, sub6: req.body.sub6 }).then((resp) => {
        if (resp.length != 0) {
            res.send("1")
        }
        else {
            attendanceData.save().then(()=>{
                res.send("sent");
            }).catch((err)=>{
                res.send(err);
            })
            
        }
    })
}

async function attendanceDataFetching(req,res){
    attendanceModelCtrl.attendanceModel.find({}).then((docs)=>{
        if(docs)
        {
            res.send(docs)
        }
    }).catch((err)=>{
        res.send("bad request")
    });
}
        


module.exports={ attendanceRegistrationController , attendanceDataFetching }