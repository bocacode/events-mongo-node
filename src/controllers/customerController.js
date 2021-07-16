const Customer = require('../models/customerModel')
const express = require('express')
const app = express()
app.use(express.json())

exports.updateCustomer = (req, res) => {
    const hardCodedCust = {
        fName: 'Val'
    }

    const newCustInfo = {
        fName: 'Timmy',
        lName: 'Paul',
        email: 'timmypaul@gmail.com',
        phone: '999-999-9998'

    }

    Customer
        .findOneAndUpdate(hardCodedCust, newCustInfo, { new: true })
        .then(() => {
            res.status(200).send('updated', Customer)
            
        })
        .catch(err => console.log(err))

}
