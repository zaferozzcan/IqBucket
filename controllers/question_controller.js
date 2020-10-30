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


questionRouter.get("/:tech")




module.exports = questionRouter;