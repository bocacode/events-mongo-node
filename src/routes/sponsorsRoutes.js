const express = require('express')
const router = express.Router()

const sponsorsController = require('../controllers/sponsorsControllers')
router.post('/addSponsor', sponsorsController.createSponsor)

module.exports = router
