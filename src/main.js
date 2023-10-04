import './styles/reset.css';
import './styles/main.css';
import './pages/home.page';

import { Router } from '@vaadin/router';

const outlet = document.getElementById('outlet');
const router = new Router(outlet);

router.setRoutes([
  { path: '/', component: 'home-page' },
  { path: '(.*)', redirect: '/' },
]);
