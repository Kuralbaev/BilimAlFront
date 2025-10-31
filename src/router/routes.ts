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
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue'),
  },
  {
    path: '/blog/:id',
    name: 'BlogView',
    component: () => import('../views/BlogView.vue'),
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('../views/Team.vue'),
  },
  {
    path: '/team/:id',
    name: 'TeamView',
    component: () => import('../views/TeamView.vue'),
  },
]

export default routes
