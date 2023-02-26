// Pages
import { Home, Login, About, Error } from '../pages';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: 'home',
    name: 'Home',
    component: Home,
  },
  {
    path: 'about',
    name: 'About',
    component: About,
  },
  {
    path: null,
    name: 'Error',
    component: Error,
  },
];

export default routes;
