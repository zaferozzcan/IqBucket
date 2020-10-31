const express = require("express");
const Question = require("../models/questions")

const questionRouter = express.Router()
const qts = require("../models/qts")

questionRouter.get("/create/seed", (req, res) => {
    Question.create(qts, (err, data) => {
        console.log(data);
        if (!err) {
            console.log("Questions seed created");
        } else {
            console.log("questions seed err", err);
        }
    })
    res.redirect("/")
})


questionRouter.get("/:tech", (req, res) => {
    Question.find({ tech: req.params.tech }, (err, data) => {
        if (!err) {
            res.render("index/questions.ejs", {
                qts: data
            })
        } else {
            console.log("err in get question", err);
        }
    })
})






module.exports = questionRouter;