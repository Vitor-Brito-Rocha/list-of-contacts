import { createRouter, createWebHistory } from 'vue-router'
import Contatos from '../pages/Contatos.vue'
import NotFound from '../pages/NotFound.vue'
import Login from '../pages/Login.vue'
import NotAuthorized from '../pages/NotAuthorized.vue'

const routes = [
  {
    path: '/',
    name: 'loginHome',
    component: Login,
  },
  {
    path: '/contatos',
    name: 'contatos',
    component: Contatos,
    meta: { requiresAuth: true, title: 'Contatos - Teste' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { title: 'Não encontrado'}

  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { title: 'Login'}

  },
  {
    path: '/notauthorized',
    name: 'notauthorized',
    component: NotAuthorized,
    meta: { title: 'Não autorizado'}
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to, from, next) => {
  const auth = localStorage.getItem('auth')
  if (to.meta.requiresAuth && auth !== 'true'
  ) {next('/notauthorized') }
   else{
  next()
  }})
  router.afterEach((to) => {
    document.title = to.meta.title || 'Lista de contatos'
  })
  
export default router