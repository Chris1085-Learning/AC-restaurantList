const restaurantList = require('../restaurant.json')

const getIndex = (req, res) => {
  // paste the restaurant data into 'index' partial template
  res.render('index', { restaurants: restaurantList.results })
}

const getShowpage = (req, res) => {
  // find the restaurant_id in restaurantList and render 'show' partial template
  const restaurant = restaurantList.results.find((restaurant) => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant: restaurant })
}

const getSearch = (req, res) => {
  // get user query string and filter restaurantList data
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter((restaurant) => {
    return (
      restaurant.name.toLowerCase().includes(keyword.toLowerCase()) ||
      restaurant.category.includes(keyword.toLowerCase())
    )
  })

  res.render('index', { restaurants: restaurants, keyword: keyword })
}

exports.getIndex = getIndex
exports.getSearch = getSearch
exports.getShowpage = getShowpage
