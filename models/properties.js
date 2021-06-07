const mongoose = require("mongoose")
const Schema = mongoose.Schema

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
    }
})

const Property = mongoose.model("property", PropertySchema)

module.exports = Property