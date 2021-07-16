const express = require('express')
const router = express.Router()

const ordersController = require('../controllers/ordersController')
router.get('/orders/:eventDate', ordersController.getOrdersByDate)
router.post('/addOrder', ordersController.createOrder)

module.exports = router
