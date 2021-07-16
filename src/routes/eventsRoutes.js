const express = require('express') // import express
const router = express.Router() // get router function from express

const eventsController = require('../controllers/eventsController')

router.post('/addEvent', eventsController.createEvent)

// export all routes within the router
router.get('/events/bydate/:search', eventsController.getEventByDate)
router.get('/events/bytitle/:search', eventsController.getEventByTitle)
router.get('/events', eventsController.getAllEvents)

router.patch('/events/:updateEvent', eventsController.updateEvent)
router.delete('/events/:eventTitle', eventsController.deleteEvent)

module.exports = router
