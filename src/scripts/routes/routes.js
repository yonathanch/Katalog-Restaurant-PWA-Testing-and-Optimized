import Detail from '../views/pages/detail';
import Favourite from '../views/pages/FavouriteRestaurant';
import Restaurant from '../views/pages/restaurant';

const routes = {
  '/': Restaurant, // default page
  '/home': Restaurant,
  '/favourite': Favourite,
  '/detail/:id': Detail,
};

export default routes;
