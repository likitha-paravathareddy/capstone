const studentModelCtrl=require('../models/studentModel')
const bcrypt = require("bcrypt");
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
    const hashedPassword = await bcrypt.hash(studentId, 10);
    console.log(hashedPassword)
    let studentData=studentModelCtrl.studentModel({
        name:req.body.name,
        branch:req.body.branch,
        semester:req.body.semester,
        email:req.body.email,
        studentId:studentId,
        password:hashedPassword

    });      
            studentData.save((err, result) => {
                if (err) {
                    console.log("something went wrong")
                }
                else {
                    console.log("student added succesfully")
                }
            })
            const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
//OAuth2 configuration
const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"   
);

console.log(oauth2Client)
oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken((err,token) => {
    if(err) {
       return
    } else {
       return token;
    }
});
const authObject = {
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.MAIL_ID,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken
    },
    tls: {
        rejectUnauthorized: false
    }
}
 
//Handles the User SignUp part
const nodemailer=require("nodemailer")

                const smtpTransport = nodemailer.createTransport(authObject);
                console.log(smtpTransport)
                const mailOptions = {
                    from: process.env.MAIL_ID,
                    to: req.body.email,
                    subject: "Eventz: Confirm Account",
                    text: "Hi "+ req.body.name+" here is your credentials."+"\n"+"Username: "+studentId+" \n"+"password: "+studentId,
                };
                console.log(mailOptions)
 
                smtpTransport.sendMail(mailOptions,function(err,data){
                  if (err) {
                    console.log("Error " + err);
                  } else {
                    console.log("Email sent successfully");
                  }

                });
                res.send("Ok")
        
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