const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const errorHandler = require("./middleWares/errorHandler");
const path=require('path')
const dotenv = require("dotenv").config();
const nodemailer=require("nodemailer")
app.use(cors())
app.use(express.json());
app.use(cors())
const http = require('http');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages').formatMessage;
const { getCurrentUser, userJoin, userLeave, getRoomUsers } = require('./utils/users');

const server = http.createServer(app);
const io = socketio(server,{cors:{}});



const botName = "CRM";

app.get('/',(req,res)=>{
  res.send("Hello world")
})

const attendanceRoutes = require('./routes/attendance.js')

app.use('/attendance', attendanceRoutes)

const calendarRoutes = require('./routes/calendar.js')

app.use('/calendar', calendarRoutes)

const profileRoutes = require('./routes/profile.js')

app.use('/profile', profileRoutes)

const resultRoutes = require('./routes/results.js')

app.use('/result', resultRoutes)

const departmentRoutes = require('./routes/department')

app.use('/department', departmentRoutes)

const coursesRoutes = require('./routes/courses')

app.use('/courses', coursesRoutes)

const timetableRoutes = require('./routes/timetable')

app.use('/timetables', timetableRoutes)

const stutimetableRoutes = require('./routes/stutimetable')

app.use('/stutimetables', stutimetableRoutes)

const teachtimetableRoutes = require('./routes/teachtimetable')

app.use('/teachtimetables', teachtimetableRoutes)

const studentRoutes = require('./routes/students')

app.use('/students', studentRoutes)

const paymentRoutes = require('./routes/payments')

app.use('/payments', paymentRoutes)

const mypaymentRoutes=require('./routes/mypayments')

app.use('/mypayments',mypaymentRoutes)

const myexampaymentRoutes=require('./routes/exampayments')

app.use('/exampayments',myexampaymentRoutes)

const examRoutes=require('./routes/exams')

app.use('/exams',examRoutes)

const dataRoutes=require('./routes/data')

app.use('/data',dataRoutes)

const bookRoutes=require('./routes/books')

app.use('/books',bookRoutes)

const announcementRoutes=require('./routes/announcement')

app.use('/announce',announcementRoutes)


const hallticketRoutes=require('./routes/hallticket')

app.use('/hallticket',hallticketRoutes)


const eventsRoutes=require('./routes/eventCalender')

app.use('/calenderEvents',eventsRoutes)
app.use("/api/users", require("./routes/userRoutes"));
app.use("/faculty", require("./routes/facultyRoutes"));
app.use(errorHandler);
const { validationResult } = require("express-validator");

 
// const { google } = require("googleapis");
// const OAuth2 = google.auth.OAuth2;
 
// //OAuth2 configuration
// const oauth2Client = new OAuth2(
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//     "https://developers.google.com/oauthplayground"   
// );
// oauth2Client.setCredentials({
//     refresh_token: process.env.REFRESH_TOKEN
// });
// const accessToken = oauth2Client.getAccessToken((err,token) => {
//     if(err) {
//        return
//     } else {
//        return token;
//     }
// });
 
// const authObject = {
//     service: "gmail",
//     auth: {
//         type: "OAuth2",
//         user: process.env.MAIL_ID,
//         clientId: process.env.CLIENT_ID,
//         clientSecret: process.env.CLIENT_SECRET,
//         refreshToken: process.env.REFRESH_TOKEN,
//         accessToken: accessToken
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// }
 
// //Handles the User SignUp part

//                 const smtpTransport = nodemailer.createTransport(authObject);
//                 const mailOptions = {
//                     from: process.env.MAIL_ID,
//                     to: "reddylikitha201@gmail.com",
//                     subject: "Eventz: Confirm Account",
//                     text: "Hi Likitha Here is your credentials",
           
//                 };
 
//                 smtpTransport.sendMail(mailOptions,function(err,data){
//                   if (err) {
//                     console.log("Error " + err);
//                   } else {
//                     console.log("Email sent successfully");
//                   }

//                 });
            

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

io.on('connection', socket => {
    
  // console.log("New websocket connection");

  socket.on('joinRoom', ({ username, room }) => {

      const user = userJoin(socket.id, username, room)

      socket.join(user.room);

      // socket.emit("msg", formatMessage(botName, "sample message to check emit function of socket io!!!!"))//emitting to serve and client


      //Broadcast when user connects
      socket.broadcast.to(user.room).emit("msg", formatMessage(botName, `${user.username} has joined in the chat`));       //emitting to all the clients except sender

      //send users and room info
      io.to(user.room).emit('roomusers', {
          room: user.room,
          users: getRoomUsers(user.room)
      })
  })



  socket.on("chatmsg", message => {

      let user = getCurrentUser(socket.id);
      io.to(user.room).emit("msg", formatMessage(user.username, message));
  })


  //Runs when user disconnects
  socket.on("disconnect", () => {
      const user = userLeave(socket.id);

      if (user) {
          io.to(user.room).emit("msg", formatMessage(botName, `${user.username} has left the chat`));      //emitting to all the users

          //send users and room info
          io.to(user.room).emit('roomusers', {
              room: user.room,
              users: getRoomUsers(user.room)
          })
      }


  })


})


// app.use(express.static('public'))







server.listen(8080, () => console.log("server listening on 8080 port"))