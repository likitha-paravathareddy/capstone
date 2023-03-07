const db=require('./conn').db
const mongoose=require('./conn').mongoose

const coursesSchema=mongoose.Schema({
    courseName:
    {
        type:String
    },
    departmentName:
    {
        type:String
    },
   curriculum:
   {
    type: Array,
    default:[]
   },
   assignedTeachers:
   {
    type: String
   },
   link:{
    type:Array,
    default:[]
   },
   notes:{
    type:Array,
    default:[]
   }

})

let coursesModel=mongoose.model('course',coursesSchema)
module.exports={coursesModel}