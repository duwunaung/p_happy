const mongoose = require("mongoose")
const Schema = mongoose.Schema


const GeoSchema = new Schema({
    type: {
        default: "Point",
        type: String
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
})

const PropertySchema = new Schema({
    title: {
        type: String,
        required: [true, "Building Title is Required"],
    },
    detail: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    },
    geometry: GeoSchema
})

const Property = mongoose.model("property", PropertySchema)

module.exports = Property