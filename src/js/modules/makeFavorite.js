export function makeFavorite (favoriteBtns, taskArr) {
  favoriteBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      let element = event.target.closest('.main-tasks__list-item')
      element.classList.toggle('main-tasks__list-item--favorite');

      
      taskArr.forEach(item => {
        if(element.getAttribute('data-id') == item.id) {
          element.classList.contains('main-tasks__list-item--favorite') ? item.setFavoriteStatus(true) : item.setFavoriteStatus(false);
        }
      })
    })
  })
}