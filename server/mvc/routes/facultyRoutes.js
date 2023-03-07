const express = require("express");
const {
  registerFaculty,
  loginFaculty,
  getFaculty,
} = require("../controllers/facultyController");
const validateToken = require("../middleWares/validateToken");
console.log(registerFaculty)
const router = express.Router();

router.post("/register", registerFaculty);

router.post("/login", loginFaculty);

router.get("/reg",getFaculty)


module.exports = router;
