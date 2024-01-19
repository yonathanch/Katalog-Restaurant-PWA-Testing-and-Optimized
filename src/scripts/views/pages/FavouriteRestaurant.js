import FavoriteRestaurantIdb from '../../data/favourite-restaurantjesy-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favourite = {
  async render() {
    return `
    
    <section class="content">
      <h1 tabindex="0" class="main-resto_label">
        Favourite Restaurant
      </h1>
      <h3 class="restaurant-item__not__found"></h3>
      <div id="main-resto_list" class="list-resto"></div>
    </section>
 
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.getElementById('main-resto_list');
    const empty = document.querySelector('.restaurant-item__not__found');
    if (restaurants.length === 0) {
      empty.innerHTML = `
      <h3>Tidak ada favorite restaurant yang ditampilkan</h3>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favourite;
