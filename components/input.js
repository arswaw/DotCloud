import { InputTemplate } from '../templates/Input.js'

const Input = {
  template: InputTemplate,
  data: function () { return { dotMessage: '' } },
  methods: {
    storeDotInLocalStorage: function () {
      this.$root.$emit('new-dot', {
        // id is a random 16 digit number
        id: Math.random().toString().slice(3),
        name: '/u/amir',
        handle: '@amir',
        message: this.dotMessage,
        date: new Date(Date.now()).toLocaleDateString(),
        endorsements: 0
      })
      
      this.dotMessage = ''
    }
  }
}

export { Input }