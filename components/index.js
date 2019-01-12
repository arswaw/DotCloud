import { IndexTemplate } from '../templates/Index.js'

import { Input } from './input.js'
import { Dot } from './dot.js'

const Index = {
  template: IndexTemplate,
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

export { Index }