const Customer = require('../models/customerModel')
const express = require('express')
// const app = express()
// app.use(express.json())

exports.updateCustomer = (req, res) => {
    Customer.findOneAndUpdate()
}
