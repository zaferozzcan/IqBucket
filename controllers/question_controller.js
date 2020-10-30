const express = require("express");
const Question = require("../models/questions")

const questionRouter = express.Router()
const qts = require("../models/qts")

questionRouter.get("/subjects/questions/create/seed", (req, res) => {
    Question.create(qts, (err, data) => {
        if (!err) {
            console.log("Questions seed created");
        } else {
            console.log("questions seed err", err);
        }
    })
})






module.exports = questionRouter;