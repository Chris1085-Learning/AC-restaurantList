function addDeleteEventListener() {
  // 選取所有的 deleteModal 為了尋找餐廳名稱及id
  const trashes = $('[data-target="#deleteModal"]')

  for (let i = 0; i < trashes.length; i++) {
    trashes[i].addEventListener('click', function () {
      // 尋找餐廳名稱及id
      const restaurantName = trashes.closest('.restaurant').find('.card-title')[i].innerHTML
      const id = trashes.closest('.restaurant')[i].children[0].id

      // 更改 modal content並重新將form action link指向新的url
      $('#deleteContent').text('待刪除餐廳：' + restaurantName)
      $('#deleteForm').attr('action', `./restaurants/${id}?_method=DELETE`)
    })
  }
}

function addEditEventListener() {
  // 選取所有的 editModal 為了尋找id
  const editInfo = $('[data-target="#editModal"]')

  for (let i = 0; i < editInfo.length; i++) {
    editInfo[i].addEventListener('click', function () {
      // 尋找id
      const id = editInfo.closest('.restaurant')[i].children[0].id
      // 透過api將資料回傳至 editModal增加使用者體驗
      axios.get(`/restaurants/${id}/jsonInfo`).then((res) => {
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

        // 更改 modal content並重新將form action link指向新的url
        $('#editForm').attr('action', `./restaurants/${id}?_method=PUT`)
      })
    })
  }
}

// 設定監聽事件
addDeleteEventListener()
addEditEventListener()
