const express = require("express");
const Question = require("../models/questions");
const Subject = require("../models/subjects");
const subjs = require("../models/subjs");
const qts = require("../models/qts");
const { json } = require("express");

const quizRouter = express.Router()

var quizReqArr = {}
const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
      return next()
    } else {
      res.redirect('/sessions/new')
    }
  }

quizRouter.get("/", isAuthenticated, (req, res) => {

    Subject.find({}, (err, data) => {
        if (!err) {
            res.render("../views/index/quiz.ejs", {
                subs: data,
                currentUser:req.session.currentUser

            })
        } else {
            console.log("quiz err");
        }
    })
})

// cards show route
quizRouter.get("/cards", isAuthenticated, (req, res) => {
    for (key of [Object.keys(quizReqArr)]) {
        Question.find({ tech: key }, (err, data) => {
            if (data.length < 1) {
                res.send(`
                <h1>You must select a technology</h1>
                <button onclick='location.href="/quiz"' type='button'>Go Back</button>
                `)
            }
            // console.log("random data", data[Math.floor(Math.random() * data.length) - 1]);
            if (!err) {
                res.render("../views/index/quiz_cards.ejs", {
                    cardQuestions: data[Math.ceil(Math.random() * data.length) - 1],
                    currentUser:req.session.currentUser

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
