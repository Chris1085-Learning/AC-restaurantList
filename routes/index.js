const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const search = require('./modules/search')
const crud = require('./modules/crud')
const jsonInfo = require('./modules/jsonInfo')
const sort = require('./modules/sort')

router.use('/', home)
router.use('/restaurants', search)
router.use('/restaurants', sort)
router.use('/restaurants', crud)
router.use('/restaurants', jsonInfo)

module.exports = router
