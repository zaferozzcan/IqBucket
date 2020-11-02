const express = require("express");
const Question = require("../models/questions");
const Subject = require("../models/subjects");
const subjs = require("../models/subjs");
const qts = require("../models/qts");
const { json } = require("express");

const quizRouter = express.Router()

var quizReqArr = {}

quizRouter.get("/", (req, res) => {

    Subject.find({}, (err, data) => {
        if (!err) {
            res.render("../views/index/quiz.ejs", {
                subs: data
            })
        } else {
            console.log("quiz err");
        }
    })
})

// cards show route
quizRouter.get("/cards", (req, res) => {
    for (key of [Object.keys(quizReqArr)]) {
        Question.find({ tech: key }, (err, data) => {
            for (obj of data) {
                obj.random = Number(Math.random() * data.lenght - 1)
            }
            console.log("random data", data[Math.floor(Math.random() * data.length) - 1]);
            if (!err) {
                res.render("../views/index/quiz_cards.ejs", {
                    cardQuestions: data[Math.ceil(Math.random() * data.length) - 1]
                })
            }
        })
    }
})

// cards post route
quizRouter.post("/cards", (req, res) => {
    quizReqArr = req.body
    res.redirect("/quiz/cards")
});

module.exports = quizRouter
