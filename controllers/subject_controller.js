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
    res.redirect("/subjects")
})

// // front-end-route
// subjectRouter.get("/home", (req, res) => {
//     Subject.find({}, (err, data) => {
//         if (!err) {
//             console.log(data);
//             res.render("index.ejs"), {
//                 subjects: data
//             }
//         } else {
//             console.log("err front-end get route", err);
//         }
//     })
// })

// index route
subjectRouter.get("/:area", (req, res) => {
    if (req.params.area) {
        Subject.find({ area: req.params.area }, (err, data) => {
            if (!err) {
                res.render("index.ejs", {
                    subjects: data
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




module.exports = subjectRouter;