// IMPORTING 
const express = require("express") 
const app = express()
const port = 8000

// HAVE THESE TWO LINES ABOVE ALL APP CODE
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// IMPORT CONFIG
require("./configs/mongoose.config")

// IMPORT FOR ROUTES
const Routes = require("./routes/jokes.routes")
Routes(app)

// THIS WILL RUN THE CODE ON THE PORT
app.listen(port, () => console.log(`Listening on port: ${port}`))
