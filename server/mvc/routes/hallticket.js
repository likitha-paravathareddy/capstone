const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const hallticketDetail = require('../controllers/hallticket')

routes.post('/reg', hallticketDetail.RegistrationController)
routes.get('/reg', hallticketDetail.hallticketDataFetching)
//routes.get('/reg', coursesDetail.coursesDataFetching)

module.exports = routes