const Customer = require('../models/customerModel')


exports.updateCustomer = (req, res) => {
    Customer
    .findOneAndUpdate(req.parmas.id, {$set: req.body}, {new: true})
    .then(res.status(200).send('updated', Customer))
    .catch(err => console.log(err))

}
