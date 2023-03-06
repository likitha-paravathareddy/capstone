const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Faculty = require("../models/facultyModel");

let branchcodes={
  "cse":505,
  "ece":506,
  "eee":507,
  "mech":508,
  "civil":509,
  "it":510
}

const registerFaculty = asyncHandler(async (req, res) => {
    const { name,email, branch,courses } = req.body;
    console.log(req.body)
    if (!branch || !email || !courses || !name) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }

    console.log(name)
    const facultyAvailable = await Faculty.findOne({ email });
    if (facultyAvailable) {
      res.status(400);
      throw new Error("User already registered!");
    }
    var branc=branchcodes[branch]
    monday=[0,0,0,0,0,0]
    tuesday=[0,0,0,0,0,0]
    wednesday=[0,0,0,0,0,0]
    thursday=[0,0,0,0,0,0]
    friday=[0,0,0,0,0,0]
    const facultyId=branc.toString()+(branc+Math.floor(100+Math.random()*900)).toString()
    console.log(facultyId)
    const hashedPassword = await bcrypt.hash(facultyId, 10);
    console.log("Hashed Password: ", hashedPassword);
    const faculty = await Faculty.create({
      facultyId:facultyId,
      facultyName:name,
      email,
      password: hashedPassword,
      branch,
      courses,
      monday:monday,
      tuesday:tuesday,
      wednesday:wednesday,
      thursday:thursday,
      friday:friday
    });
  
    console.log(`User created ${faculty}`);

                res.send("Ok")

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