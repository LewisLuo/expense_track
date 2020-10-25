// Server variables
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Including view engine
const exphbs = require('express-handlebars')
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))

// Including middlewares
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

require('./config/mongoose')

// Registered helpers
require('./utils/isMatched')
require('./utils/mapIcons')

// Router setting
const routes = require('./routes')
app.use(routes)

//Server listening
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})