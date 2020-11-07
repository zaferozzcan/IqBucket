const express = require("express");
const Question = require("../models/questions")
const Subject = require("../models/subjects");


const questionRouter = express.Router()
const qts = require("../models/qts")



const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
      return next()
    } else {
      res.redirect('/sessions/new')
    }
  }

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
questionRouter.get("/:tech", isAuthenticated, (req, res) => {
    Question.find({ tech: req.params.tech }, (err, data) => {
        if (!err) {
            res.render("index/questions.ejs", {
                qts: data,
                tech: req.params.tech,
                currentUser:req.session.currentUser
            })
        } else {
            console.log("err in get question", err);
        }
    })
})

// create show 
questionRouter.get("/:tech/new",isAuthenticated, (req, res) => {
    res.render("../views/show/new_question.ejs", {
        tech: req.params.tech,
        currentUser:req.session.currentUser
    })
})

// cretae post
questionRouter.post("/:tech",isAuthenticated, (req, res) => {
    Question.create(req.body, (err, res) => {
        if (!err) {
            console.log("A new question added.");
        } else {
            console.log("error new question post", err);
        }
    })
    res.redirect(`/questions/${req.params.tech}`)
})


// edit show route
questionRouter.get("/:tech/:id/edit",isAuthenticated, (req, res) => {
    Question.find({ _id: req.params.id }, (err, data) => {
        if (!err) {
            console.log(data);
            res.render("../views/show/edit_question.ejs", {
                q: data[0],
                currentUser:req.session.currentUser
            })
        } else {
            console.log("edit question error", err);
        }
    })
})



// edit put route
questionRouter.put("/:tech/:id/",isAuthenticated, (req, res) => {
    Question.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, data) => {
        if (!err) {
            console.log("the question updated");
        } else {
            console.log("an error in question edit");
        }
    })
    res.redirect(`/questions/${req.params.tech}`)
});



// delete route
questionRouter.delete("/:tech/:id", (req, res) => {
    Question.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        if (!err) {
            console.log("item has been deleted");
        } else {
            console.log(data);
        }
    })
    res.redirect("/questions/" + req.params.tech)
})





module.exports = questionRouter;