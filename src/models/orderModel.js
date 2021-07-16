const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
  orderNumber: { 
    type: Number,
    required: true,
    unique: true,
 },
  date: { type: Date, required: true },
  item: String,
  total: String,
  customerID: Number,
  timestamps: true
})

module.exports = mongoose.model('Order', OrderSchema)
