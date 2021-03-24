const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

// Search Data
router.get('/search', (req, res) => {
  // get user query string and filter restaurantList data
  const keyword = req.query.keyword.toLowerCase()

  Restaurant.find({
    $or: [
      { name: { $regex: new RegExp('.*' + keyword + '.*', 'i') } },
      { category: { $regex: new RegExp('.*' + keyword + '.*', 'i') } }
    ]
  })
    .sort({ _id: 'asc' })
    .lean()
    .then((restaurants) => res.render('index', { restaurants: restaurants, keyword: keyword }))
    .catch((err) => console.log(err))
})

module.exports = router
