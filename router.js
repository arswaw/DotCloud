import { Index } from './components/index.js'
import { Login } from './components/login.js'

const routes = [
  { 
    path: '/', 
    component: Index 
  },
  { 
    path: '/login', 
    component: Login 
  }
]

const router = new VueRouter({
  routes
})

export { router }