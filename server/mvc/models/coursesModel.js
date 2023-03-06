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
    type: [String]
   },
   assignedTeachers:
   {
    type: [String]
   }

})

let coursesModel=mongoose.model('course',coursesSchema)
module.exports={ coursesModel }