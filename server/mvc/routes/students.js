const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const studentDetail = require('../controllers/students')

routes.post('/reg', studentDetail.studentRegistrationController)
routes.get('/reg', studentDetail.studentDataFetching)

module.exports = routes