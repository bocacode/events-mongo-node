const express = require('express')
const router = express.Router()

const customerController = require('../controllers/customerController')
router.patch('/customer/:fName', customerController.updateCustomer)

module.exports = router