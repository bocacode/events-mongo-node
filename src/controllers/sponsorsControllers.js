const Sponsor = require('../models/sponsorModel')

exports.createSponsor = (req, res) => {
  new Sponsor(req.body)
    .save()
    .then(() => {
      res.status(200).send('Sponsor has been created')
    })
    .catch((err) => console.error(err))
}

exports.deleteSingleSponsor = (req, res) => {
  Sponsor.findOneAndDelete({ company: 'FPL' })
    .then(deleteSponsor => {
      res.status(200).send(deleteSponsor)
    })
    .catch(err => console.log(err))
}
