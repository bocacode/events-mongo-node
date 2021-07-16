const express = require('express')
const router = express.Router()

const ordersController = require('../controllers/ordersController')
router.get('/orders/:eventDate', ordersController.getOrdersByDate)
router.get('/orders/:number', ordersController.getOrdersByIdNumber)
router.get('/orders', ordersController.getAllOrders )


// todo get one order by idNum
router.post('/addOrder', ordersController.createOrder)

module.exports = router

