const { text } = require("express");
const express = require("express");
const Subject = require("../models/subjects");
const subjs = require("../models/subjs");

const subjectRouter = express.Router()
const subj = require("../models/subjs")

// seed
subjectRouter.get("/create/seed", (req, res) => {
    Subject.create(
        subj
        , (err, res) => {
            if (!err) {
                console.log("Seed is created");
            } else {
                console.log(err);
            }
        })
    res.redirect("/subjects/front-end")
})



// index route
subjectRouter.get("/:area", (req, res) => {
    if (req.params.area) {
        Subject.find({ area: req.params.area }, (err, data) => {
            if (!err) {
                res.render("index.ejs", {
                    subjects: data,
                    area: req.params.area
                });
            } else {
                console.log("Cannot load subs");
            }
        })
    } else {
        Subject.find({}, (err, data) => {
            if (!err) {
                res.render("index.ejs", {
                    subjects: data
                });
            } else {
                console.log("Cannot load subs");
            }
        })
    }

})

subjectRouter.post("/", (req, res) => {
    console.log("post body", req.body);
    Subject.create(req.body, (err, data) => {
        if (!err) {
            console.log("A subject added!");
        } else {
            console.log("tooltip post form err", err);
        }
    })
    res.redirect("/subjects")
})


subjectRouter.get("/front-end/:tech")



module.exports = subjectRouter;