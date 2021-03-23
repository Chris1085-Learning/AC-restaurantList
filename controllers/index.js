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

const getSearch = (req, res) => {
  // get user query string and filter restaurantList data
  const keyword = req.query.keyword.toLowerCase()
  console.log(keyword)

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

const editItem = (req, res) => {}
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
