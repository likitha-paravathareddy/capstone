const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const subjectCodeDetail = require('../controllers/subjectCode')

routes.post('/reg', subjectCodeDetail.subjectCodeRegistrationController)
routes.get('/reg', subjectCodeDetail.subjectCodeDataFetching)

module.exports = routes