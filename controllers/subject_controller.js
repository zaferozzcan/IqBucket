const express = require("express");
const Subject = require("../models/subjects")

const subjectRouter = express.Router()


// seed
subjectRouter.get("/create/seed", (req, res) => {
    Subject.create([
        {
            name: "node.js",
            area: "Back End",
        },
        {
            name: "React",
            area: "Front End"
        }
    ], (err, res) => {
        if (!err) {
            console.log("Seed is created");
        } else {
            console.log(err);
        }
    })
    res.redirect("/subject")
})

subjectRouter.get("/", (req, res) => {
    Subject.find({}, (err, data) => {
        if (!err) {
            console.log("index.js get route data", data);
            res.render("subject_box.ejs", {
                subjects: data
            });
        } else {
            console.log("Cannot load subs");
        }
    })
})


module.exports = subjectRouter;