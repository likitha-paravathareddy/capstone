const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const branchCodeDetail = require('../controllers/branchCode')

routes.post('/reg', branchCodeDetail.branchCodeRegistrationController)
routes.get('/reg', branchCodeDetail.branchCodeDataFetching)

module.exports = routes