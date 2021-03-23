const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// Setting bodyParser
app.use(bodyParser.urlencoded({ extended: true }))
// Routers
const index = require('./controllers/index')
app.get('/', index.getIndex)
app.get('/restaurants/:_id', index.getShowpage)
app.get('/search', index.getSearch)
app.post('/restaurants/:_id/edit', index.editItem)
app.post('/restaurants/:id/delete', index.deleteItem)
app.get('/restaurants/:_id/getJsonInfo', index.getJsonInfo)

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
