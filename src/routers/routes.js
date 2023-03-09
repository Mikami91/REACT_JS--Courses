// Pages
import { Login, Home, Error } from '../auth';
// Routers
import HeroesRouter from '../heroes/routers/HeroesRouter';

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: 'home',
    name: 'home',
    component: Home,
  },
  {
    path: null,
    name: 'Error',
    component: Error,
  },
  {
    path: '/*',
    name: 'heroes',
    component: HeroesRouter,
  },
];

export default routes;
