const express = require('express')
const router = express.Router()

const sponsorsController = require('../controllers/sponsorsControllers')

// todo get all sponsors 
// todo get one sponsor by company

router.post('/addSponsor', sponsorsController.createSponsor)

module.exports = router
