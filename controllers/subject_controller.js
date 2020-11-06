const { text } = require("express");
const express = require("express");
const Article = require("../models/articles");
const Subject = require("../models/subjects");
const Question = require("../models/questions");
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




subjectRouter.get("/:area", (req, res) => {
    Article.find({}, (err, artData) => {
        if (!err) {
            Subject.find({ area: req.params.area }, (err, subjData) => {
                if (!err) {
                    Question.countDocuments({}, (err, qCountData) => {
                        if (!err) {
                            res.render("index.ejs", {
                                subjects: subjData,
                                articles: artData,
                                qCount: qCountData
                            })
                        }
                    })

                } else {
                    console.log('an error in finding subject data');
                }
            })
        } else {
            console.log("an error in finding article data");
            Subject.find({ area: req.params.area }, (err, subjData) => {
                if (!err) {
                    console.log(artData);
                    res.render("index.ejs", {
                        subjects: subjData,
                        articles: artData
                    })
                } else {
                    console.log('an error in finding subject data');
                    Subject.find({}, (err, data) => {
                        if (!err) {
                            res.render("index.ejs", {
                                subjects: data
                            });
                        } else {
                            console.log("Cannot load subjs");
                        }
                    })
                }
            })
        }
    })
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







module.exports = subjectRouter;