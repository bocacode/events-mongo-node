const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
  idNum: { type: Number, required: true },
  date: { type: Date, required: true },
  item: String,
  total: String,
  customerID: Number,
  timestamps: true
})

module.exports = mongoose.model('Order', OrderSchema)
