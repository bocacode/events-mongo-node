const mongoose = require('mongoose')

const SponsorSchema = mongoose.Schema(
  {
    company: { type: String, required: true },
    level: { type: String, required: true },
    contact: String,
  },
  { timestamps: true }
)

module.exports = mongoose.model('Sponsor', SponsorSchema)
