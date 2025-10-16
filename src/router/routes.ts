import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue'),
  },
  {
    path: '/news/:id',
    name: 'NewsView',
    component: () => import('../views/NewsView.vue'),
  },
  {
    path: '/youtube',
    name: 'YouTube',
    component: () => import('../views/YouTube.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
]

export default routes
