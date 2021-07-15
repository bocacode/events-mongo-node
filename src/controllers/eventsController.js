const Event = require('../models/eventModel') // import the model 
const deleteSponsor = require('../models/eventModel')

// export a function called get all Events
exports.getAllEvents = (req, res) => {
  Event
    .find()
    .then(allEvents => {
      res.status(200).send(allEvents)
    })
    .catch(err => console.log(err))
}

exports.deleteSponsor = (req, res) => {
  deleteSponsor
  .delete()
  .then(singleSponsor => {
    res.status(500).send(deleteSponsor)
  })
  .catch(err => console.log(err))
}