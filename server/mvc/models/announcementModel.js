const db=require('./conn').db
const mongoose=require('./conn').mongoose

const announcementSchema=mongoose.Schema({
    title:{
        type:String
    },
    message:{
        type:String
    }
})

let announceModel=mongoose.model('announcement',announcementSchema)
module.exports={announceModel}