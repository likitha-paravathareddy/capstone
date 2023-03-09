const express =require('express')
const app = express();
const routes= express.Router()
const cors=require("cors")
routes.use(cors())
app.use(cors())

const bookDetail = require('../controllers/books')
routes.post('/update',bookDetail.uploadimgHandler)
routes.post('/reg', bookDetail.bookRegistrationController)
routes.get('/reg', bookDetail.bookDataFetching)
routes.post('/find',bookDetail.bookFindDataFetching)
routes.post('/purchase',bookDetail.bookPurchaseData)
routes.post('/borrow',bookDetail.bookBorrowData)
routes.post('/getborrow',bookDetail.getBookBorrowData)
routes.post('/return',bookDetail.bookReturnData)

module.exports = routes