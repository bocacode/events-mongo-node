const express = require('express')
const router = express.Router()

const customersController = require('../controllers/customersControllers')
router.post('/addCustomer', customersController.createCustomer)

module.exports = router
