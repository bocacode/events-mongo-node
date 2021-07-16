const mongoose = require('mongoose') // import mongoose

//create schema = rules to control type of data
const EventSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true },
    description: String,
    cost: String,
    attendees: Array,
    image: String,
  },
  { timestamps: true }
)
// create model from Schema
module.exports = mongoose.model('Event', EventSchema)
