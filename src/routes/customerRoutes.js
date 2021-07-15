const express = require ('express')
const router = express.Router()

const customerController = require('../customers/customerController')

router.get('/',customerController.updateCustomer)

module.exports = router