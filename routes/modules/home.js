const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  const sortName = '排序方式'
  Restaurant.find()
    .sort({ _id: 'asc' })
    .lean()
    .then((restaurants) => res.render('index', { restaurants, sortName }))
    .catch((err) => console.log(err))
})

module.exports = router
