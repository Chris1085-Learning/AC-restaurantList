const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const CRUD = require('./modules/CRUD')
const jsonInfo = require('./modules/jsonInfo')

router.use('/', home)
router.use('/restaurants', CRUD)
router.use('/restaurants', jsonInfo)

module.exports = router
