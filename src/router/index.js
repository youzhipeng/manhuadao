import Vue from 'vue'
import VueRouter from 'vue-router'

import Homes from '../views/Homes'
import Aboutr from '../views/Aboutr'
import Classify from '../views/Classify'
import Favorite from '../views/Favorite'
import Feedback from '../views/Feedback'
import History from '../views/Favorite/History'
import Soucang from '../views/Favorite/Soucang'
import Login from '../views/Login'
import More from '../views/More'
import My from '../views/My'
import Ranking from '../views/Ranking'
import Register from '../views/Register'
import Search from '../views/Search'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/homes', component: Homes },
    { path: '/aboutr', component: Aboutr },
    { path: '/classify', component: Classify },
    {
      path: '/favorite',
      component: Favorite,
      children: [
        {
          path: 'history',
          component: History
        },
        {
          path: 'soucang',
          component: Soucang
        },
        {
          path: '',
          redirect: '/favorite/soucang'
        }
      ]

    },

    { path: '/feedback', component: Feedback },
    { path: '/login', component: Login },
    { path: '/more', component: More },
    { path: '/my', component: My },
    { path: '/ranking', component: Ranking },
    { path: '/register', component: Register },
    { path: '/search', component: Search },
    { path: '/', redirect: '/homes' }
  ]
})

export default router
