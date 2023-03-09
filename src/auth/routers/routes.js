// Pages
import { Login, Home, Error } from '../auth';
import { DC, Marvel } from '../heroes';

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
    path: 'dc',
    name: 'dc',
    component: DC,
  },
  {
    path: 'marvel',
    name: 'marvel',
    component: Marvel,
  },
  {
    path: null,
    name: 'Error',
    component: Error,
  },
];

export default routes;
