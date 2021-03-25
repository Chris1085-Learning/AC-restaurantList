const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

router.get('/sort_by', (req, res) => {
  const [type, sortMethod] = req.query.sortInfo.split('-')

  Restaurant.find()
    .sort({ [type]: [sortMethod] })
    .lean()
    .then((restaurants) => res.render('index', { restaurants }), curSelection)
    .catch((err) => console.log(err))
})

module.exports = router
