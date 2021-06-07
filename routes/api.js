const express = require("express")

const router = express.Router()

router.get("/properties", function(req, res) {
    res.send({method: "GET"})
})

router.post("/properties", function(req, res) {
    console.log(req.body)
    res.send({
        method: "POST",
        title: req.body.title,
        detail: req.body.detail,
        status: req.body.status
    })
})
router.put("/properties/:id", function(req, res) {
    res.send({method: "PUT"})
})
router.delete("/properties/:id", function(req, res) {
    res.send({method: "DELETE"})
})

module.exports = router