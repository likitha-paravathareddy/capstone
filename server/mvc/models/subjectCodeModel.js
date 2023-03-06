const db=require('./conn').db
const mongoose=require('./conn').mongoose

const subjectCodeSchema=mongoose.Schema({
    subjectName:
    {
        type:String
    },
    subjectCode:
    {
        type:String
    }
})

let subjectCodeModel=mongoose.model('subjectcodes',subjectCodeSchema)
module.exports={ subjectCodeModel }