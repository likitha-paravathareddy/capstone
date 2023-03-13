
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

#### 3. Profile Page
- Profile page comes with the starter details of email department and roll number
- An editable form to fill other details is present
- Student can also update their profile picture using multer library

#### 4. Library Management
- A library management section is present
- Students can view the books in the library
- Students can borrow and return the books
- Fine is calculated from date of return when date of return is not met and displayed on the home page for students
- On the admin side books can be added to the library which is stored using s3 buckets and MongoDB

#### 5. Hall Ticket Generation
- Students can view and download exam halltickets from the website
- Hall tickets will only be shown once exam fee is paid
- Hall tickets display the dates of exams

#### 6. Results
- Available on student and faculty side
- Students can view semesterwise results
- Faculty can update semesterwise and subjectwise results

#### 7. Timetables
- Students can select their semester and department from the timetables page and render their class timetables
- timetables contain class timings
- list of faculty along with the subjects they teach is also present
- Timetables are also downloadable

#### 8. Courses
- Displays all the courses in the given semester for the student

#### 9. Payments
- 2 types of payments exist: Exam and College fee
- you can also view your previous transactions in the my payments tab

#### 10. Notifications
- Admin can send notifications which will be broadcast to all or specific users
- The notifications can be for lack of fee payment, less attendance etc.

#### 11. Chat Function
- Used websockets
- Teachers can chat with students using this function
- Individual chat rooms are created using socket.io library



## Tech Stack

**Client:** HTML, Bootstrap, JQuery, VanillaJS

**Server:** Node, Express

**Database:** MongoDB
