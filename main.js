import { Main } from './templates/main.js'
import { Dot } from './components/dot.js'
import { Nav } from './components/nav.js'
import { Grid } from './components/grid.js'

/* global Vue */
new Vue({
  el: '#app',
  data: function() {
    return {
      tweets: [1,2,3,4,5,6,7,8,9,10,11,12]
    }
  },
  components: {
    'dot': Dot,
    'navbar': Nav,
    'grid': Grid
  },
  template: Main
})