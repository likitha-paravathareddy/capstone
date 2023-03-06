const db=require('./conn').db
const mongoose=require('./conn').mongoose

const attendanceSchema=mongoose.Schema({
    date:{
        type:String
    },
    rollNumber:
    {
        type:String
    },
    sub1:{
        type:String
    },
    sub2:
    {
        type:String
    },
    sub3:
    {
        type:String
    },
    sub4:
    {
        type:String
    },
    sub5:
    {
        type:String
    },
    sub6:
    {
        type:String
    }    
})

let attendanceModel=mongoose.model('attendance',attendanceSchema)
module.exports={ attendanceModel }