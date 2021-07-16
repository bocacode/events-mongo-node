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

exports.getAllOrders = (req, res) => {
  Order.find()
  .then(allOrders => res.status(200).send(allOrders) )
  .catch(err => res.send(err))

}

exports.deleteOrder = (req,res) => {
  Order.findOneAndDelete({ orderNumber: req.params.orderNum })
  .then( () => res.status(410).send('Order deleted.'))
  .catch(err => res.status(500).send('Could not delete order'))
}

exports.getOrdersByIdNumber =(req, res) => {
  const {number} = req.params
  Order.findOne({orderNumber: number})
  .then(oneOrder => res.status(200).send(oneOrder))
  .catch(err => res.send(err))
}

exports.updateOrder = (req, res) => {
  const {number} = req.params
  Order.updateOne({orderNumber: number}, req.body)
  .then(() => res.status(200).send('order updated') )
  .catch(err => res.send(err))
}