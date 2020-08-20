import { RoutesInterface } from './Routes.interface';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

const routes: RoutesInterface[] = [
  {
    id: '/',
    component: Home,
    path: '/',
    authenticated: true,
    showLayout: true,
  },
  {
    id: '/login',
    component: Login,
    path: '/login',
    authenticated: false,
  },
];

export default routes;
