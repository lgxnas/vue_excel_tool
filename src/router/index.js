import Vue from 'vue'
import VueRouter from 'vue-router'
import Ssurface from '../views/Ssurface.vue'
import Sunder from '../views/Sunder.vue'
import Surface from '../views/Surface.vue'
import Under from '../views/Under.vue'
import Home from '../views/Home.vue'
import River from '../views/River.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/ssurface',
    name: 'ssurface',
    component: Ssurface
  },
  {
    path: '/sunder',
    name: 'sunder',
    component: Sunder
  },
  {
    path: '/surface',
    name: 'surface',
    component: Surface
  },
  {
    path: '/under',
    name: 'under',
    component: Under
  },
  {
    path: '/r',
    name: 'river',
    component: River
  },
  {
    path: '/*',
    // name:'ssurface',
    redirect: '/home'
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes
})

export default router