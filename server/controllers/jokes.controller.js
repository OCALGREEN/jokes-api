
const { json } = require("express/lib/response")
const {Joke} = require("../models/jokes.model")

// CONTROLLER
module.exports.homePage = (req, res) => {
    res.json("Home Page")
}

// GET ALL
module.exports.getAllJokes = (req, res) => {
    console.log("Get All Jokes")
    Joke.find()
        .then(joke => res.json(joke))
        .catch(err => res.json(err)) 
}

// GET ONE
module.exports.getOneJoke = (req, res) => {
    console.log("Get One Joke")
    const id = req.params.id
    console.log("ID: ", id) 
    Joke.findOne({_id: id})
        .then(joke => res.json(joke))
        .catch(err => res.json(err)) 
}

// CREATE
module.exports.createJoke = (req, res) => {
    console.log("Create One Joke")
    Joke.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

// CREATE OPTION 2
module.exports.createJokeOption2 = (req, res) => {
    console.log("Create One Joke Option 2")
    const newJoke = new Joke(req.body)
    newJoke.save()
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

// UPDATE
module.exports.updateJoke = (req, res) => {
    console.log("Update One Joke")
    const id = req.params.id 
    Joke.findOneAndUpdate(
        {_id: id}, 
        req.body,
        {new: true, runValidators: true}
    )
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

// DELETE
module.exports.deleteJoke = (req, res) => {
    console.log("Delete One Joke")
    Joke.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

// GETS A RANDOM JOKE
module.exports.randomJoke = (req, res) => {
    Joke.find()
        .then(joke => {
        
        
        res.json(joke)})
        .catch(err => res.json(err)) 
    console.log("--------RANDOM JOKE--------")
    

}