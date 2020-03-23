const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Event = new Schema(
    {
        eventcode: { type: String, required: true },
        name: { type: String, required: true },
        languages: [{
            name: { type: String, required: true },
            order: { type: Number, required: true }
        }]
    },
    { timestamps: true },
)

module.exports = mongoose.model('events', Event)