import { Home } from './components/home.js'
import { Login } from './components/login.js'
import { Signup } from './components/signup.js'

const routes = [
  { 
    path: '/', 
    component: Home,
    meta: {
      title: 'Home'
    } 
  },
  { 
    path: '/login', 
    component: Login,
    meta: {
      title: 'Login'
    }  
  },
  { 
    path: '/signup', 
    component: Signup,
    meta: {
      title: 'Sign Up'
    } 
  }
]

const router = new VueRouter({
  routes
})

// Change the title based on the page name
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Dot Cloud`
  next()
})

export { router }