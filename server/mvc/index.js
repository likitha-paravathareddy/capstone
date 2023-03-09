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

app.get('/',(req,res)=>{
  res.send("Hello world")
})

const attendanceRoutes = require('./routes/attendance.js')

app.use('/attendance', attendanceRoutes)

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

// const bookRoutes=require('./routes/books')

// app.use('/books',bookRoutes)

app.use("/api/users", require("./routes/userRoutes"));
app.use("/faculty", require("./routes/facultyRoutes"));
app.use(errorHandler);
const { validationResult } = require("express-validator");



app.listen(8080,() =>
{
    console.log("server listening at port 8080")
})