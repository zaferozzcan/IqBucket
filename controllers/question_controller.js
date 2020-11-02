const express = require("express");
const Question = require("../models/questions")
const Subject = require("../models/subjects");


const questionRouter = express.Router()
const qts = require("../models/qts")

// seed \\
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



// index //
questionRouter.get("/:tech", (req, res) => {
    Question.find({ tech: req.params.tech }, (err, data) => {
        if (!err) {
            res.render("index/questions.ejs", {
                qts: data,
                tech: req.params.tech
            })
        } else {
            console.log("err in get question", err);
        }
    })
})

// create show
questionRouter.get("/:tech/new", (req, res) => {
    res.render("../views/show/new_question.ejs", {
        tech: req.params.tech
    })
})

// cretae post
questionRouter.post("/", (req, res) => {
    Question.create(req.body, (err, res) => {
        if (!err) {
            console.log("A new question added.");
        } else {
            console.log("error new question post", err);
        }
    })
    res.redirect("/questions")
})


questionRouter.delete("/:tech/:id", (req, res) => {
    Question.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        if (!err) {
            console.log("item has been deleted");
        } else {
            console.log(data);
        }
    })
})



module.exports = questionRouter;