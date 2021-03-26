const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

router.get('/sort', (req, res) => {
  // 取得按照排序的方法及方式
  const [type, sortMethod] = req.query.method.split('-')
  const typeList = { _id: '預設排序', name: '名稱', category: '類別', rating: '評分' }
  const sortMethodList = { asc: 'A->Z', desc: 'Z->A', descending: '由高至低', ascending: '由低至高' }

  // 顯示sort select名稱
  const sortName = type === '_id' ? `${typeList[type]}` : `${typeList[type]} ${sortMethodList[sortMethod]}`

  Restaurant.find()
    .sort({ [type]: [sortMethod] })
    .lean()
    .then((restaurants) => res.render('index', { restaurants, sortName }))
    .catch((err) => console.log(err))
})

module.exports = router
