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

module.exports = subjectRouter;