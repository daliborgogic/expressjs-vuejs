const express = require('express')
const app = express.Router()

app.route('/')
  .get((req, res) => {
    res.render('index', {
      title: 'Express',
      description: 'Welcome to Express'
    })
  })

module.exports = app
