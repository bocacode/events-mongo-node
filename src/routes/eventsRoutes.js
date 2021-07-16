const express = require('express') // import express
const router = express.Router() // get router function from express

// import events controller
const eventsController = require('../controllers/eventsController')
router.get('/events/:search', eventsController.getEventByDate)
router.get('/events/:search', eventsController.getEventByName)
router.get('/', eventsController.getAllEvents)
// export all routes within the router
module.exports = router