const express = require('express') // import express
const cors = require('cors') // import cors
const mongoose = require('mongoose') // import mongoose
require('dotenv/config') // importing dotenv libriary to use variable

const app = express() // creating app as Express
app.use(express.json()) // use express and parse everythig into json

mongoose
  .connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }) // connect to mongoose
  .then(() => {
    app.listen(5000)
    console.log('App is listening on 5000, and connected to mongo')
  })
  .catch((err) => console.log(err))

// import the router
const eventsRoutes = require('./src/routes/eventsRoutes')
app.use(eventsRoutes)


const updateCustomer = require('./src/routes/customerRoutes')
app.use(updateCustomer)
const sponsorsRoutes = require('./src/routes/sponsorsRoutes')
app.use(sponsorsRoutes)

const customersRoutes = require("./src/routes/customersRoutes")
app.use(customersRoutes)

const ordersRoutes = require('./src/routes/ordersRoutes')
app.use(ordersRoutes)
