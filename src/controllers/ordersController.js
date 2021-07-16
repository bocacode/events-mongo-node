const Order = require('../models/orderModel')

exports.getOrdersByDate = (req, res) => {
  const {eventDate} = req.params
  Order
  .findOne ({ date: eventDate}) 
  .then(oneOrder => res.status(200).send(oneOrder))
  .catch(err => res.send(err))
}

