import { router } from './router.js'

import { MainTemplate } from './templates/Main.js'

import { Dot } from './components/dot.js'
import { Footer } from './components/footer.js'
import { Input } from './components/input.js'
import { Nav } from './components/nav.js'

/* global Vue */
var vm = new Vue({
  el: '#app',
  router,
  data: {
    dots: JSON.parse(localStorage.getItem('dots'))
  },
  components: {
    'input-box': Input,
    'dot': Dot,
    'navbar': Nav,
    'footer-section': Footer
  },
  template: MainTemplate
})