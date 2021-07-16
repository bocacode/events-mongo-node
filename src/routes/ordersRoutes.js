const express = require('express')
const router = express.Router()

const ordersController = require('../controllers/ordersController')
router.get('/orders/:eventDate', ordersController.getOrdersByDate)

// todo get all orders
// todo get one order by idNum
router.post('/addOrder', ordersController.createOrder)

module.exports = router
