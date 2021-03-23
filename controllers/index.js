const Restaurant = require('../models/restaurant')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restaurantList', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected')
})

const getIndex = (req, res) => {
  Restaurant.find()
    .sort({ id: 1 })
    .lean()
    .then((restaurants) => res.render('index', { restaurants }))
    .catch((err) => console.log(err))
}

const getShowpage = (req, res) => {
  const id = req.params._id
  Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch((err) => console.log(err))
}

const getJsonInfo = (req, res) => {
  const id = req.params._id
  Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.json(restaurant))
    .catch((err) => console.log(err))
}

const getSearch = (req, res) => {
  // get user query string and filter restaurantList data
  const keyword = req.query.keyword.toLowerCase()

  Restaurant.find({
    $or: [
      { name: { $regex: new RegExp('.*' + keyword + '.*', 'i') } },
      { category: { $regex: new RegExp('.*' + keyword + '.*', 'i') } }
    ]
  })
    .sort({ id: 1 })
    .lean()
    .then((restaurants) => res.render('index', { restaurants: restaurants, keyword: keyword }))
    .catch((err) => console.log(err))
}

const editItem = (req, res) => {
  const id = req.params._id
  const formInfo = req.body

  Restaurant.findById(id)
    .then((restaurant) => {
      restaurant.name = formInfo.name
      restaurant.name_en = formInfo.name_en
      restaurant.phone = formInfo.phone
      restaurant.category = formInfo.category
      restaurant.location = formInfo.location
      restaurant.rating = formInfo.rating
      restaurant.image = formInfo.image
      restaurant.google_map = formInfo.google_map
      restaurant.description = formInfo.description

      return restaurant.save()
    })
    .then(() => res.redirect('/'))
    .catch((err) => console.log(err))
}
const deleteItem = (req, res) => {
  const id = req.params.id

  Restaurant.findById(id)
    .then((restaurant) => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch((err) => console.log(err))
}

exports.getIndex = getIndex
exports.getSearch = getSearch
exports.getShowpage = getShowpage
exports.editItem = editItem
exports.deleteItem = deleteItem
exports.getJsonInfo = getJsonInfo
