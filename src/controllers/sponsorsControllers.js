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
  Sponsor.findOneAndDelete({ company: req.params.company })
    .then(Sponsor => {
      res.status(200).send(Sponsor)
    })
    .catch(err => console.log(err))
}

exports.getAllSponsors = (req, res) => {
  Sponsor.find()
    .then(allSponsors => {
      res.status(200).send(allSponsors)
    })
    .catch(err => console.log(err))
}

exports.getSponsorByCompanyName = (req, res) => {
  Sponsor.findOne({ company: req.params.company })
    .then(sponsor => {
      res.send(sponsor)
    })
    .catch(err => res.status(500).send('Could not find sponsor'))
  }