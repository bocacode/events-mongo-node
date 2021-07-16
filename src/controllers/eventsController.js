const Event = require('../models/eventModel') // import the model 

// export a function called get all Events
exports.getAllEvents = (req, res) => {
  Event
    .find()
    .then(allEvents => {
      res.status(200).send(allEvents)
    })
    .catch(err => console.log(err))
  Event.find()
    .then((allEvents) => {
      res.status(200).send(allEvents)
    })
    .catch((err) => console.log(err))
}

// export a function that gets event by name
exports.getEventByName = (req, res) => {
  const { eventName } = req.query
  Event.findOne({ title: eventName })
    .then((event) => {
      console.log(event)
      res.send(event)
    })
    .catch((err) => res.status(500).send('Could not find event'))
}

exports.getEventByDate = (req, res) => {
  const { eventDate } = req.query
  Event.findOne({ date: eventDate })
    .then(event => {
      console.log(event)
      res.send(event)
    })
     .catch(err => res.status(500).send('Could not find the date'))
}

exports.updateEvent = (req,res) => {
  const { updateEvent } = req.params
  Event.findOneAndUpdate({ title: updateEvent }, {$set: req.body})
  .then(event => {
    console.log(event)
    res.status(200).send('event updated') 
    })
    .catch(err => res.status(500).send('Could not update'))
  }   