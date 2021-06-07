const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())


app.use("/api", require("./routes/api"))

app.listen(process.env.port || 3030, function() {
    console.log("Process is running")
})