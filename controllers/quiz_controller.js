const express = require("express");
const Question = require("../models/questions");
const Subject = require("../models/subjects");
const subjs = require("../models/subjs");
const qts = require("../models/qts")

const quizRouter = express.Router()


quizRouter.get("/", (req, res) => {

    Subject.find({}, (err, data) => {
        console.log(data);
        if (!err) {
            res.render("../views/index/quiz.ejs", {
                subs: data
            })
        } else {
            console.log("quiz err");
        }
    })
})

module.exports = quizRouter
