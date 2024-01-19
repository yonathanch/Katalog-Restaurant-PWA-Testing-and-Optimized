const createRestaurantItemTemplate = (restaurant) => `
<article tabindex="0" class="resto-item">
  <a href="/#/detail/${restaurant.id}" class="resto-link">
    <div class="resto-item_content">
    <img data-src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" alt="${restaurant.name}" tabindex="0" crossorigin="anonymous" class="resto-item_image lazyload">
      <div class="resto-item_details">
        <p tabindex="0" class="resto-item_city" alt="kota restoran">
          ${restaurant.city}
          <span class="resto-item_rating" aria-label="rating resto ${restaurant.rating}">
            &star; ${restaurant.rating}
          </span>
        </p>
        <h2 tabindex="0" class="resto-item_name" alt="nama restoran">${restaurant.name}</h2>
        <p class="resto-item_desc" alt="deskripsi restoran">${restaurant.description}</p>
      </div>
    </div>
  </a>
</article>

`;

const createRestaurantDetailTemplate = (restaurant) => `

<div class="new-detail" id="new-detail">
  <div tabindex="0" class="new-container-info">
    <div class="new-resto-item_content">
      <img data-src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" alt="Gambar ${restaurant.name}" tabindex="0" tabindex="0" crossorigin="anonymous" class="lazyload"/>
    </div>
    <ul class="new-detail-info">
      <li class="new-resto-name">
        <i title="restaurant"></i>
        <p class="new-detail-name-address-rating">${restaurant.name}</p>
      </li>

      <li class="new-resto-address">
        <i class="fa fa-building"></i>
        <p class="new-detail-name-address-rating">${restaurant.address}, ${restaurant.city}</p>
      </li>

      <li class="new-resto-rating">
        <i title="ratings"></i>
        <p class="new-detail-name-address-rating">&star; ${restaurant.rating}</p>
      </li>
      <h4> Description: </h4>
      <li><p class="new-detail-desc">${restaurant.description}</p></li>

      <li class="new-resto-category">${restaurant.categories
    .map(
      (category) => `
            <span class="new-category">${category.name}</span>
          `,
    )
    .join('')}
      </li>
    </ul>
  </div>

  <h3 tabindex="0" id="new-resto-detail-form-review-title"><span>List Menu ⬇</span></h3>
  <br>
  <div class="new-restaurant-detail__menu-list">
    <div class="new-foods">
      <h4>Food:</h4>
      </hr>
      <ul class="new-restaurant-detail__foods">
        ${restaurant.menus.foods
    .map(
      (food) => `
              <li><i class="fa fa-cutlery font-decoration"></i> ${food.name}</li>`,
    )
    .join('')}
      </ul>
    </div>
    <div class="new-drinks">
      <h4>Drink:</h4>
      </hr>
      <ul class="new-restaurant-detail__drinks">
        ${restaurant.menus.drinks
    .map(
      (drink) => `
              <li><i class="fa fa-coffee font-decoration"></i> ${drink.name}</li>`,
    )
    .join('')}
      </ul>
    </div>
  </div>
  <h2 tabindex="0" id="new-resto-detail-form-review-title"><span>Reviews</span></h2>
  <div tabindex="0" class="new-detail-review">
    ${restaurant.customerReviews
    .map(
      (review) => `
          <div class="new-detail-review-item">
            <div class="new-header-review">
              <p class="new-name-review"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>${review.name}</p>
              <p class="new-date-review">${review.date}</p>
            </div>
            <div class="new-body-review">
              ${review.review}
            </div>
          </div>
          `,
    )
    .join('')}
  </div>
</div>

`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate, createUnlikeButtonTemplate,

};
