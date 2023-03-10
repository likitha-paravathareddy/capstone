const db=require('./conn').db
const mongoose=require('./conn').mongoose

const eventCalenderSchema=mongoose.Schema({
  
    title:{
        type:String
    },
    note:{
        type:String
    },
    type:{
        type:String
    },
    startDate:{
        type:Date
    },
    endDate:{
        type:Date
    }
})

let eventCalenderModel=mongoose.model('eventCalender',eventCalenderSchema)
module.exports={eventCalenderModel}