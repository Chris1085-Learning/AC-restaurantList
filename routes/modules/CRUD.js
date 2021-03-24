const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

router.get('/search', (req, res) => {
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
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch((err) => console.log(err))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
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
})

router.delete('/:id', (req, res) => {
  const id = req.params.id

  Restaurant.findById(id)
    .then((restaurant) => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch((err) => console.log(err))
})

module.exports = router
