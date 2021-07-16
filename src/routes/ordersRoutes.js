const express = require('express')
const router = express.Router()

const ordersController = require('../controllers/ordersController')
router.get('/orders/date/:eventDate', ordersController.getOrdersByDate)
router.get('/orders/id/:number', ordersController.getOrdersByIdNumber)
router.get('/orders', ordersController.getAllOrders )


// todo get one order by idNum
router.post('/addOrder', ordersController.createOrder)

router.delete('/deleteOrder/:orderNum', ordersController.deleteOrder)

module.exports = router

