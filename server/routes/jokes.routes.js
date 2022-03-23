// IMPORTS
const JokesController = require("./../controllers/jokes.controller")

// ROUTES
module.exports = (app) => {
    app.get("/api", JokesController.homePage) // HOME
    app.get("/api/jokes", JokesController.getAllJokes) // GET ALL
    app.get("/api/jokes/random", JokesController.randomJoke) // RANDOM
    app.get("/api/jokes/:id", JokesController.getOneJoke) // GET ONE
    app.post("/api/jokes/new", JokesController.createJoke) // CREATE
    app.post("/api/jokes/new/option2", JokesController.createJokeOption2) // CREATE
    app.put("/api/jokes/update/:id", JokesController.updateJoke) // UPDATE
    app.delete("/api/jokes/delete/:id", JokesController.deleteJoke) // DELETE
    
}