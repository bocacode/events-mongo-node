const Order = require('../models/orderModel')

exports.createOrder = (req, res) => {
  new Order(req.body)
    .save()
    .then(() => {
      res.status(200).send('Order has been created')
    })
    .catch((err) => console.error(err))
}
