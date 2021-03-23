const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// Routers
const index = require('./controllers/index')
app.get('/', index.getIndex)
app.get('/restaurants/:_id', index.getShowpage)
app.get('/search', index.getSearch)
app.post('/', index.editItem)
app.post('/restaurants/:id/delete', index.deleteItem)
app.get('/restaurants/jsonInfo/:_id', index.getJsonInfo)

// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
