const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    source: { type: String, required: true }
});


const Article = mongoose.model("Article", articleSchema)


module.exports = Article;