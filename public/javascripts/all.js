function addDeleteEventListener() {
  const trashes = $('[data-target="#deleteModal"]')

  for (let i = 0; i < trashes.length; i++) {
    trashes[i].addEventListener('click', function () {
      const restaurantName = trashes.closest('.restaurant').find('.card-title')[i].innerHTML
      const id = trashes.closest('.restaurant')[i].children[0].id

      $('#deleteContent').text('待刪除餐廳：' + restaurantName)
      $('#deleteForm').attr('action', `./restaurants/${id}/delete`)
    })
  }
}

function addEditEventListener() {
  const editInfo = $('[data-target="#editModal"]')

  for (let i = 0; i < editInfo.length; i++) {
    editInfo[i].addEventListener('click', function () {
      const id = editInfo.closest('.restaurant')[i].children[0].id

      axios.get(`/restaurants/${id}/getJsonInfo`).then((res) => {
        const restaurant = res.data

        $('#restaurantName').val(restaurant.name)
        $('#restaurantNameEn').val(restaurant.name_en)
        $('#restaurantPhone').val(restaurant.phone)
        $('#restaurantClass').val(restaurant.category)
        $('#restaurantAddress').val(restaurant.location)
        $('#restaurantRating').val(restaurant.rating)
        $('#restaurantImage').val(restaurant.image)
        $('#restaurantGoogleMap').val(restaurant.google_map)
        $('#restaurantDescription').val(restaurant.description)

        $('#editForm').attr('action', `./restaurants/${id}/edit`)
      })
    })
  }
}

addDeleteEventListener()
addEditEventListener()
