const express = require('express') // import express
const router = express.Router() // get router function from express

const eventsController = require('../controllers/eventsController')

router.get('/events/bydate/:search', eventsController.getEventByDate)
router.get('/events/byname/:search', eventsController.getEventByName)
router.get('/events', eventsController.getAllEvents)

router.patch('/events/:updateEvent', eventsController.updateEvent)

module.exports = router
