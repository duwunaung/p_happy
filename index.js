const express = require("express")
const bodyParser = require("body-parser")

const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb://localhost/sampleproperties")

mongoose.Promise = global.Promise

app.use(bodyParser.json())

app.use("/api", require("./routes/api"))

app.use(function(err, req, res, next) {
    res.status(422).send({error: err.message})
})// error handling 

app.listen(process.env.port || 3030, function() {
    console.log("Process is running")
})