import Vue from 'vue'
import VueRouter from 'vue-router'
import MeuInicio from '../views/MeuInicio.vue'
import ListaHerois from '../views/ListaHerois'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: MeuInicio
  },
  {
    path: '/listadeherois',
    name: 'ListaHerois',
    component: ListaHerois
  },
]

const router = new VueRouter({
  routes
})

export default router
