const trashes = document.getElementsByClassName('trash')

for (let i = 0; i < trashes.length; i++) {
  trashes[i].addEventListener('click', function () {
    const restaurantName = $(trashes[i]).closest('.restaurant').find('.card-title')[0].innerHTML
    const id = $(trashes[i]).closest('.restaurant')[0].children[0].id

    $('#deleteContent').text('待刪除餐廳：' + restaurantName)
    $('#deleteForm').attr('action', `./restaurants/${id}/delete`)
  })
}
