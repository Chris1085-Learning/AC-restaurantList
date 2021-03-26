const express = require('express')
const router = express.Router()

// Get database jsonInfo and show on modal
const Restaurant = require('../../models/restaurant')
router.get('/:id/jsonInfo', (req, res) => {
  const id = req.params.id
  Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.json(restaurant))
    .catch((err) => console.log(err))
})

module.exports = router
