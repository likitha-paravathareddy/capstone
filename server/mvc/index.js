const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const errorHandler = require("./middleWares/errorHandler");
const path=require('path')
const dotenv = require("dotenv").config();
const nodemailer=require("nodemailer")
app.use(express.json());

app.get('/',(req,res)=>{
  res.send("Hello world")
})

const attendanceRoutes = require('./routes/attendance.js')

app.use('/attendance', attendanceRoutes)

const resultRoutes = require('./routes/results.js')

app.use('/result', resultRoutes)

const departmentRoutes = require('./routes/department')

app.use('/department', departmentRoutes)

const subjectCodeRoutes = require('./routes/subjectCodes')

app.use('/subjectCodes', subjectCodeRoutes)

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/faculty", require("./routes/facultyRoutes"));
app.use(errorHandler);
const { validationResult } = require("express-validator");

 
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
 
//OAuth2 configuration
const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"   
);
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

                const smtpTransport = nodemailer.createTransport(authObject);
                const mailOptions = {
                    from: process.env.MAIL_ID,
                    to: "reddylikitha201@gmail.com",
                    subject: "Eventz: Confirm Account",
                    text: "Hi Likitha Here is your credentials",
           
                };
 
                smtpTransport.sendMail(mailOptions,function(err,data){
                  if (err) {
                    console.log("Error " + err);
                  } else {
                    console.log("Email sent successfully");
                  }

                });
            

//const nodemailer = require('nodemailer');
// const xoauth2 = require('xoauth2');

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         xoauth2: xoauth2.createXOAuth2Generator({
//             user: 'lalitha11022002@gmail.com',
//             clientId: '114219850456-kfsrb5kf6gd57aadq9m5k4i9em4c2f0l.apps.googleusercontent.com',
//             clientSecret: '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',
//             refreshToken: '1//04_mBw2-zj59TCgYIARAAGAQSNwF-L9IrtqbqVd-3oCljwDO00pADPWSSghRvf6PCbdoog8vOnmV5MSWsfARFBZUYOc6rPM0sdI4'
//         })
//     }
// })

// var mailOptions = {
//     from: 'lalitha11022002@gmail.com',
//     to: 'plikitha.liki2001@gmail.com',
//     subject: 'Nodemailer test',
//     text: 'Hello World!!'
// }

// transporter.sendMail(mailOptions, function (err, res) {
//     if(err){
//         console.log('Error');
//     } else {
//         console.log('Email Sent');
//     }
// })

app.listen(8080,() =>
{
    console.log("server listening at port 8080")
})