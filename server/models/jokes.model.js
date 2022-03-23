const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    joke: {
        type: String,
        required: [true, "joke is required"], 
        minlength: [10, "joke must be at least 10 characters long"]
    },
    punchLine: {
        type: String, 
        required: [true, "punch line is required"], 
        minlength: [3, "punch line must be at least 3 characters long"]
    }
}, {timestamps: true})

module.exports.Joke = mongoose.model("Joke", JokeSchema)