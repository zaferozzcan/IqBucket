const express = require("express");
const Article = require("../models/articles")
const Subject = require("../models/subjects");


const articleRouter = express.Router()




articleRouter.get("/articles/create", (req, res) => {
    Article.create({
        title: "Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC",
        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    })
    console.log("article created");
    res.redirect("/")
})

articleRouter.get("/:tech/articles", (req, res) => {
    Article.find({}, (err, data) => {
        if (!err) {
            console.log(data);
            res.render("index.ejs", {
                art: data
            })
        }
    })
})








module.exports = articleRouter;




