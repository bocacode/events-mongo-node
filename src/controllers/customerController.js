const Customer = require('../models/customerModel')
const express = require('express')
const app = express()
app.use(express.json())

exports.updateCustomer = (req, res) => {
    const hardCodedCust = {
        fname: 'Matt'
    }

    const newCustInfo = {
        girlfriend: true,
        brownEyes: false,
        fname: 'Mathew'

    }

    Customer
        .findOneAndUpdate(hardCodedCust, newCustInfo, { new: true })
        .then(() => {
            // res.status(200).send('updated', Customer)
            console.log('Updated')
        })
        .catch(err => console.log(err))

}
