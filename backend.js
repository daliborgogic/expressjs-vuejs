const express = require('express')
const app = express()
const routes = require('./routes/index')

app.set('views', 'views')
app.set('view engine', 'pug')
app.use(express.static('public'))
app.use('/', routes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// development error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: err
  })
})

app.set('port', process.env.PORT || 3000)

const server = app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + server.address().port)
})
