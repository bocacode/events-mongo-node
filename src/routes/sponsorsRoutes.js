const express = require('express')
const router = express.Router()

const sponsorsController = require('../controllers/sponsorsControllers')

// todo get all sponsors
// todo get one sponsor by company

router.delete('/deleteSponsor', sponsorsController.deleteSingleSponsor)
router.post('/addSponsor', sponsorsController.createSponsor)
router.get('/getSponsors', sponsorsController.getAllSponsors)
router.get('/sponsorByCompany', sponsorsController.getSponsorByCompany)

module.exports = router
