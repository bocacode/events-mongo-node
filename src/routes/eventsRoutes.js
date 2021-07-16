const express = require('express') // import express
const router = express.Router() // get router function from express

// import events controller
const eventsController = require('../controllers/eventsController')
router.get('/', eventsController.getAllEvents)
router.get('/events/:search', eventsController.getEventByName)

// export all routes within the router
module.exports = router