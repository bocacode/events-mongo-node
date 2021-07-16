const Sponsor = require('../models/sponsorModel')

exports.deleteSingleSponsor = (req, res) => {
  Sponsor.findOneAndDelete({ company: 'FPL' })
    .then(deleteSponsor => {
      res.status(200).send(deleteSponsor)
    })
    .catch(err => console.log(err))
}
