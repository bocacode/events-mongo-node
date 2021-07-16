const mongoose = require('mongoose')
const CustomerSchema = mongoose.Schema(
  {
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      max: 255,
      min: 6,
    },
    phone: String,
    customerId: Number,
  },
  { timestamps: true }
)

module.exports = mongoose.model('Customer', CustomerSchema)
