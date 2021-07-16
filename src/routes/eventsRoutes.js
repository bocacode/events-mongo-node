const express = require('express') // import express
const router = express.Router() // get router function from express

const eventsController = require('../controllers/eventsController')

router.get('/events/bydate/:search', eventsController.getEventByDate)
router.get('/events/bytitle/:search', eventsController.getEventByTitle)
router.get('/events', eventsController.getAllEvents)

router.delete('/events/:eventTitle', eventsController.deleteEvent)

module.exports = router
