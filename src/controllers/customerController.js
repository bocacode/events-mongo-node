const Customer = require('../models/customerModel')


exports.updateCustomer = (req, res) => {
    Customer
    .find(req.body)
    .findOneAndUpdate(req.params.fName, { 
        $set: {
            fName: "Timmy"
        }
    }, {new: true})
    .then(res.status(200).send('created', Customer))
    .catch(err => console.log(err))

}
