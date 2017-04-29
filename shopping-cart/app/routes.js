import Index from './components/Index.vue'
import Cart from './components/Cart.vue'
// Route config
export default [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '*',
    redirect: '/'
  }
]
