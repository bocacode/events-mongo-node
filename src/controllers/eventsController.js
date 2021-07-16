const Event = require('../models/eventModel') // import the model

// export a function called get all Events
exports.getAllEvents = (req, res) => {
  Event.find()
    .then((allEvents) => {
      res.status(200).send(allEvents)
    })
    .catch((err) => console.log(err))
  Event.find()
    .then((allEvents) => {
      res.status(200).send(allEvents)
    })
    .catch((err) => console.log(err))
}

// export a function that gets event by name
exports.getEventByTitle = (req, res) => {
  const { eventTitle } = req.query
  Event.findOne({ title: eventTitle })
    .then((event) => {
      console.log(event)
      res.send(event)
    })
    .catch((err) => res.status(500).send('Could not find event'))
}

// export a function to get event by date
exports.createEvent = (req, res) => {
  new Event(req.body)
    .save()
    .then(() => {
      res.status(200).send('Event has been created')
    })
    .catch((err) => console.error(err))
}

exports.getEventByDate = (req, res) => {
  const { eventDate } = req.query
  Event.findOne({ date: eventDate })
    .then((event) => {
      console.log(event)
      res.send(event)
    })
    .catch((err) => res.status(500).send('Could not find the date'))
}

// create a function to delete an event
exports.deleteEvent = (req, res) => {
  const { eventTitle } = req.params
  Event.findOneAndDelete({ title: eventTitle })
  .then(event => {
    res.send('Event was deleted.', event)
  })
  .catch(err => res.status(500).send('Could not delete event'))
}