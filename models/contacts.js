const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    statement: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Contact = mongoose.model("contact", contactSchema)
module.exports = Contact