const express = require('express')
const router = express.Router()

const sponsorsController = require('../controllers/sponsorsControllers')

// ***todo get all sponsors
// ***todo get one sponsor by company

router.delete('/deleteSponsor', sponsorsController.deleteSingleSponsor)
router.post('/addSponsor', sponsorsController.createSponsor)
router.get('/getAllSponsors', sponsorsController.getAllSponsors)
router.get('/sponsor/:company', sponsorsController.getSponsorByCompanyName)

module.exports = router
