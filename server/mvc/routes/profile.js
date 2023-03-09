const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const profileDetail = require('../controllers/profile')

routes.post('/reg', profileDetail.profileRegistrationController)
routes.get('/reg', profileDetail.profileDataFetching)

module.exports = routes