const mongoose = require("mongoose")

const SponsorSchema = mongoose.Schema({
  company: String,
  level: String,
  contact: String,
})

module.exports = mongoose.model("Sponsor", SponsorSchema)
