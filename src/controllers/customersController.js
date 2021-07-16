const Customer = require('../models/customerModel') // import the model

exports.getAllCustomers = (req, res) => {
  Customer.find()
    .then(allCustomers => {
      res.status(200).send(allCustomers)
    })
    .catch(err => console.log(err))
}

exports.getCustomerByName = (req, res) => {
  const { customerName } = req.query
  Event.findOne({ title: customerName })
    .then(customer => {
      console.log(customer)
      res.send(customer)
    })
    .catch(err => res.status(500).send('Could not find customer'))
}

exports.createCustomer = (req, res) => {
  new Customer(req.body)
    .save()
    .then(() => {
      res.status(200).send('Customer has been created')
    })
    .catch(err => console.error(err))
}

exports.updateCustomer = (req, res) => {
  Customer.findOneAndUpdate({ fName: req.params.fName }, { $set: req.body })
    .then(() => {
      res.status(200).send('Updated Customer')
    })
    .catch(err => console.log(err))
}

exports.deleteCustomer = (req, res) => {
  Customer.findOneAndDelete({ fName: req.params.fName })
    .then(() => {
      res.status(200).send('Customer Deleted')
    })
    .catch(err => console.log(err))
  }      