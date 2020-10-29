// DEPENDENCIES \\ 
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
var favicon = require('serve-favicon');


// CONFIGURATION
require("dotenv").config()
const app = express()
const db = mongoose.connection
const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI

// MIDDLEWARE

app.use(express.static(__dirname + "/public"))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// DATABASE
mongoose.connect(
    mongodbURI,
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


app.get('/', (req, res) => {
    res.redirect('/subjects')
})


// APP LISTENER
app.listen(PORT, () => {
    console.log(`👉🏼Server is running on port ${PORT} for now🤟🏼`);
});