import { router } from './router.js'

import { AppTemplate } from './App.js'

import { Footer } from './components/footer.js'
import { Nav } from './components/nav.js'

/* global Vue */
var vm = new Vue({
  el: '#app',
  router,
  data: {
    dots: JSON.parse(localStorage.getItem('dots'))
  },
  components: {
    'navbar': Nav,
    'footer-section': Footer
  },
  template: AppTemplate
})