const branchCodeModelCtrl=require('../models/branchCodeModel')

async function branchCodeRegistrationController(req,res){
    console.log(req.body)
    let branchCodeData=branchCodeModelCtrl.branchCodeModel
    ({
        branchName:req.body.branchName,
        branchCode:req.body.branchCode
    })
    // console.log(branchCode_data)
    branchCodeModelCtrl.branchCodeModel.find({ branchName:req.body.branchName,     branchCode:req.body.branchCode }).then((resp) => {
        if (resp.length != 0) {
            res.send("1")
        }
        else {
            branchCodeData.save().then(()=>{
                res.send("sent");
            }).catch((err)=>{
                res.send(err);
            })
            
        }
    })
}

async function branchCodeDataFetching(req,res){
    branchCodeModelCtrl.branchCodeModel.find({}).then((docs)=>{
        if(docs)
        {
            res.send(docs)
        }
    }).catch((err)=>{
        res.send("bad request")
    });
}
        


module.exports={ branchCodeRegistrationController , branchCodeDataFetching }