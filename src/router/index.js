import Vue from 'vue'
import VueRouter from 'vue-router'
import Ssurface from '../views/Ssurface.vue'
// import Sunder from '../views/Sunder.vue'
// import Surface from '../views/Surface.vue'
// import Under from '../views/Under.vue'
// import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'home',
    component: ()=>import('../views/Home.vue')
  }, {
    path: '/ssurface',
    name: 'ssurface',
    component: Ssurface
  },
  {
    path: '/sunder',
    name: 'sunder',
    component: ()=>import('../views/Sunder.vue')
  },
  {
    path: '/surface',
    name: 'surface',
    component: ()=>import('../views/Surface.vue')
  },
  {
    path: '/under',
    name: 'under',
    component: ()=>import('../views/Under.vue')
  },
  {
    path: '/r',
    name: 'river',
    component: ()=>import('../views/River.vue')
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