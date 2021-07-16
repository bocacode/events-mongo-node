const express = require ('express')
const router = express.Router()

const customerController = require('../customers/customerController')

router.get('/src/routes/customer/',customerController.updateCustomer)

module.exports = router