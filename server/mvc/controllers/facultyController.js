const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Faculty = require("../models/facultyModel");

let branchcodes={
  cse:505,
  ece:506,
  eee:507,
  mech:508,
  civil:509,
  it:510
}

const registerFaculty = asyncHandler(async (req, res) => {
    const { facultyId, email, password, userName } = req.body;
    console.log(req.body)
    if (!userName || !email || !password || !facultyId) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const facultyAvailable = await Faculty.findOne({ facultyId });
    if (facultyAvailable) {
      res.status(400);
      throw new Error("User already registered!");
    }
  
    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const faculty = await Faculty.create({
      facultyId,
      email,
      password: hashedPassword,
      userName,
    });
  
    console.log(`User created ${faculty}`);
    if (faculty) {
      res.status(201).json({ _id: faculty.id, email: faculty.email });
    } else {
      res.status(400);
      throw new Error("User data us not valid");
    }
    res.json({ message: "Register the faculty" });
  });


  const loginFaculty = asyncHandler(async (req, res) => {
    const { facultyId, password } = req.body;
    if (!facultyId || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const faculty = await Faculty.findOne({ facultyId });
   // console.log(user)
    //compare password with hashedpassword
    if (faculty && (await bcrypt.compare(password, faculty.password))) {
      const accessToken = jwt.sign(
        {
          faculty: {
            username: faculty.username,
            email: faculty.email,
            facultyId: faculty.facultyId,
          },
        },
        process.env.ACCESS_TOKEN_SECERT,
        { expiresIn: "15m" }
      );
      res.status(200).json({ accessToken });
    } else {
      res.status(401);
      throw new Error("email or password is not valid");
    }
  });


  module.exports = { registerFaculty, loginFaculty };