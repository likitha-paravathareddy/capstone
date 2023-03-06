const db=require('./conn').db
const mongoose=require('./conn').mongoose

const branchCodeSchema=mongoose.Schema({
    branchName:
    {
        type:String
    },
    branchCode:
    {
        type:Number
    }
})

let branchCodeModel=mongoose.model('branchcodes',branchCodeSchema)
module.exports={ branchCodeModel }