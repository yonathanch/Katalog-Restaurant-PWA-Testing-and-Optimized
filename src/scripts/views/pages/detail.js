import RestaurantSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favourite-restaurantjesy-idb';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
// import PostReview from '../../utils/post-review';

const Detail = {
  async render() {
    return `
    <div tabindex="0" class="main">
    <div id="restaurant" class="restaurant"></div>
      <h3 tabindex="0">Detail Restaurant</h3>
      <section id="detail-rest"></section>
      <div id="likeButtonContainer"></div>
    </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.restaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#detail-rest');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(
      restaurant.restaurant,
    );

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        city: restaurant.restaurant.city,
        pictureId: restaurant.restaurant.pictureId,
        description: restaurant.restaurant.description,
        rating: restaurant.restaurant.rating,
      },
    });

    // const submitReview = document.getElementById('submit-review');
    // submitReview.addEventListener('click', (event) => {
    //   event.preventDefault();
    //   PostReview();
    // });
  },
};

export default Detail;
