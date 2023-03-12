
# Student CRM

Capstone project to make a sophisticated SaaS Product for a college.



## Authors

- [saloni-dayal](https://github.com/saloni-dayal)
- [likitha-paravathareddy](https://github.com/likitha-paravathareddy)
- [AshrithaKonagari](https://github.com/AshrithaKonagari)



## Features

- Uses MongoDB database
- 3 types of users: Student, Faculty and Admin
- Nice and clean UI
- Deployed using EC2 instances on AWS


## Run Locally

Clone the project

```bash
  git clone https://github.com/likitha-paravathareddy/capstone.git
```

Go to the project directory

```bash
  cd server/MVC
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```

## Documentation

### Features

#### 1. Attendance Viewer
- Student can view their subjectwise day wise Attendance
- Student gets their attendance percentage displayed along with number of present days
- Faculty can update subjectwise attendance

#### 2. Curriculum
- Faculty view
- Curriculum for the subject assigned to faculty can be viewed

#### 3. Library Management
(add features)

#### 4. Profile Page
- Profile page comes with the starter details of email department and roll number
- An editable form to fill other details is present
- Student can also update their profile picture using multer library

#### 5. 

## Tech Stack

**Client:** HTML, Bootstrap, JQuery, VanillaJS

**Server:** Node, Express

**Database:** MongoDB
