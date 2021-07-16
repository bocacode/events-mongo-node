const express = require('express') // import express
const router = express.Router() // get router function from express

// import events controller
const deleteSponsorController = require('../controllers/deleteSponsorController')
router.delete('/deleteSponsor', deleteSponsorController.deleteSingleSponsor)

// export all routes within the router
module.exports = router