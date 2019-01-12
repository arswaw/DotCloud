import { HomeTemplate } from '../templates/Home.js'

import { Input } from './input.js'
import { Dot } from './dot.js'

const Home = {
  template: HomeTemplate,
  data: function () {
    return {
      dots: JSON.parse(localStorage.getItem('dots'))
    }
  },
  components: {
    'input-box': Input,
    'dot': Dot
  }
}

export { Home }