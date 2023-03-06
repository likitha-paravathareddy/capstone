const express = require("express");
const {
  registerFaculty,
  loginFaculty,
} = require("../controllers/facultyController");
const validateToken = require("../middleWares/validateToken");

const router = express.Router();

router.post("/register", registerFaculty);

router.post("/login", loginFaculty);


module.exports = router;
