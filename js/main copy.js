'use strict';

let login = localStorage.getItem('gloDelivery');




function openGoods(event) {
  const target = event.target;
  if(login) {
    const restaurant = target.closest('.card-restaurants');
    if(restaurant) {

      console.log(restaurant.dataset.products);

      cardsMenu.textContent = '';

      containerPromo.classList.add('hide');
      restaurants.classList.add('hide');
      menu.classList.remove('hide');
    } else {
      toggleModalAuth();
    }
  }
}

function init() {
  

  
  logo.addEventListener('click', () => {
      containerPromo.classList.remove('hide');
      restaurants.classList.remove('hide');
      menu.classList.add('hide');
  });
  
  
}

init();