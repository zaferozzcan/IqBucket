// DEPENDENCIES \\ 
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const session = require('express-session')
var favicon = require('serve-favicon');


// CONFIGURATION
require("dotenv").config()
const app = express()
const db = mongoose.connection
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/IqBucket'

// MIDDLEWARE

app.use(express.static(__dirname + "/public"))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false 
    })
  )

// DATABASE
mongoose.connect(
    mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    () => {
        console.log('👉🏼The connection with mongod is established🤟🏼🎼')
    }
)
// database error checks
db.on('error', err => console.log(err.message + ' is mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// CONTROLLERS
const subjectController = require('./controllers/subject_controller')
const { use } = require('./controllers/subject_controller')
app.use('/subjects', subjectController)

const questionController = require('./controllers/question_controller')
app.use('/questions', questionController)

const quizController = require('./controllers/quiz_controller')
app.use('/quiz', quizController)

const articleController = require('./controllers/article_controller')
app.use('/articles', articleController)

const userController = require('./controllers/users_controller')
app.use('/users', userController)

const sessionsController = require('./controllers/sessions_controller.js')
app.use('/sessions', sessionsController)


// route
app.get('/', (req, res) => {
    res.redirect('/subjects/front-end')
})
app.get('/subjects', (req, res) => {
    res.redirect('/subjects/front-end')
})
app.get("/questions", (req, res) => {
    res.redirect("/")
})

// APP LISTENER
app.listen(PORT, () => {
    console.log(`👉🏼Server is running on port ${PORT} for now🤟🏼`);
});