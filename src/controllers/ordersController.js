const Order = require('../models/orderModel')

exports.createOrder = (req, res) => {
  new Order(req.body)
    .save()
    .then(() => {
      res.status(200).send('Order has been created')
    })
    .catch(err => console.error(err))
}

exports.getOrdersByDate = (req, res) => {
  const { eventDate } = req.params
  Order.findOne({ date: eventDate })
    .then(oneOrder => res.status(200).send(oneOrder))
    .catch(err => res.send(err))
}