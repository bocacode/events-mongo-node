const express = require('express')
const router = express.Router()

const ordersController = require('../controllers/ordersControllers')
router.post('/addOrder', ordersController.createOrder)

module.exports = router
