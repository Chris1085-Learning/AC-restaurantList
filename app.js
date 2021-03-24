const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const routes = require('./routes')
require('./config/mongoose')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// setting static files
app.use(express.static('public'))
// Setting bodyParser
app.use(bodyParser.urlencoded({ extended: true }))
// Setting methodOverride
app.use(methodOverride('_method'))
// Routers
app.use(routes)

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
