const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const timetableDetail = require('../controllers/timetable')
console.log(timetableDetail)
routes.post('/reg', timetableDetail.timetableRegistrationController)
routes.get('/reg', timetableDetail.timetableDataFetching)


module.exports = routes