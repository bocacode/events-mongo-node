const express = require('express')
const router = express.Router()

const customerController = require('../controllers/customerController')
router.patch('/update', customerController.updateCustomer)

module.exports = router