const express = require("express")

const Property = require("../models/properties")

const router = express.Router()

router.get("/properties", function(req, res, next) {
    Property.find({}).then(function(properties){
        res.send(properties)
    })

    // Property.geoNear(
    //     {type: "Point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    //     {maxDistance: 1000000, spherical: true}
    // ).then(function(properties){
    //     res.send(properties)
    // }).catch(next)
})

router.post("/properties", function(req, res, next) {

    Property.create(req.body).then(
        function(property) {
            res.send({
                property
            })
        }
    ).catch(next)
    
})

router.put("/properties/:id", function(req, res, next) {
    Property.findByIdAndUpdate({_id: req.params.id}, req.body).then(
        function(){
            Property.findOne({_id: req.params.id}).then(
                function(property){
                    res.send(property)
                }
            )
        }
    ).catch(next)
})

router.delete("/properties/:id", function(req, res, next) {
    console.log(req.params.id)
    Property.findByIdAndRemove({_id: req.params.id}).then(
        function(property){
            res.send(property)
        }).catch(next)
})

module.exports = router