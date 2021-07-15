const Event = require('../models/eventModel') // import the model 
const deleteSponsors = require('../model/eventModel')

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
  .then( SingleSponsor =>  {
  res.status(500).send(deleteSingleSponsor)
})
.catch(err => console.log(err))
}
