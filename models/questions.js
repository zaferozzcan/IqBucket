const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    question: { type: String, min: 4, required: true },
    answer
})