const express = require('express')
const router = express.Router()

const customersController = require('../controllers/customersController')

router.post('/addCustomer', customersController.createCustomer)
router.patch('/customer/:fName', customersController.updateCustomer)
router.get('/customers', customersController.getAllCustomers)
router.delete('/deletecustomer/:fName', customersController.deleteCustomer)

// todo get one customer
// todo delete one customer

module.exports = router