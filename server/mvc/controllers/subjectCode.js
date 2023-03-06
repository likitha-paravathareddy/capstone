const subjectCodeModelCtrl=require('../models/subjectCodeModel')

async function subjectCodeRegistrationController(req,res){
    console.log(req.body)
    let subjectCodeData=subjectCodeModelCtrl.subjectCodeModel
    ({
        subjectName:req.body.subjectName,
        subjectCode:req.body.subjectCode
    })
    // console.log(subjectCode_data)
    subjectCodeModelCtrl.subjectCodeModel.find({ subjectName:req.body.subjectName,subjectCode:req.body.subjectCode }).then((resp) => {
        if (resp.length != 0) {
            res.send("1")
        }
        else {
            subjectCodeData.save().then(()=>{
                res.send("sent");
            }).catch((err)=>{
                res.send(err);
            })
            
        }
    })
}

async function subjectCodeDataFetching(req,res){
    subjectCodeModelCtrl.subjectCodeModel.find({},(err,docs)=>{
        if(err){
            res.send("Something went wrong!");
        }
        else{
            res.send(docs)
        }
    })

}


module.exports={ subjectCodeRegistrationController , subjectCodeDataFetching }