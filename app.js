const express = require('express')
const path = require('path')
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(function(req, res, next) { next() })
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')

  .get('/', (req, res) => res.render('land'))


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
