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
  Sponsor.findOneAndDelete({ company: req.params.company})
    .then(deleteSponsor => {
      res.status(200).send(deleteSponsor)
    })
    .catch(err => console.log(err))
}

exports.getAllSponsors = (req,res) => {
allSponsors
  Sponsors.find()
  .then(allSponsors => {
    res.status(200).send(allSponsors)
  })

  .catch(err => console.log(err))
}

exports.getSponsorByCompany = (req,res) => {
sponsorCompany 
.findOne({ company: req.params.company })
.then(sponsorsCompany => {
  res.status(200).send(sponsorsCompany)
})
.catch(err => console.log(err))
}