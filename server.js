// DEPENDENCIES \\ 
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')


// CONFIGURATION
const app = express()
const db = mongoose.connection
const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI

// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))



app.listen(3000, () => {
    console.log("👉🏼 Server is running on port 3000 for now 🤟🏼");
});