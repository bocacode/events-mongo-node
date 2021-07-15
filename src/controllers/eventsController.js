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

exports.deleteSingleSponsor = (req, res) => {
  deleteSponsor
  .delete()
  .then(singleSponsor =)
  .catch(err => console.log(err))
}