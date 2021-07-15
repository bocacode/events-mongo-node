const express = require('express')
const router = express.Router()

const ordersController = require('../controllers/ordersController')
router.get('/orders/:date', ordersController.getOrdersByDate)