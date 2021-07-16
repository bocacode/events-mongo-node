const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({
  idNum: Number,
  date: Date,
  item: String,
  total: String,
})

module.exports = mongoose.model("Order", OrderSchema)
