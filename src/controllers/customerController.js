const Customer = require('../models/customerModel')


exports.updateCustomer = (req, res) => {
    Customer
        .findOneAndUpdate({fName: req.params.fName}, {$set: req.body})
        .then(() => {
            res.status(200).send('Updated Customer')
            
        })
        .catch(err => console.log(err))

}
