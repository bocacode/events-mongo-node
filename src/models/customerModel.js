const mongoose = require("mongoose")
const CustomerSchema = mongoose.Schema({
  fName: String,
  lName: String,
  email: String,
  phone: String,
})

module.exports = mongoose.model("Customer", CustomerSchema)
