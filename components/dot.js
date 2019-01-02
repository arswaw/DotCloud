import { DotTemplate } from '../templates/Dot.js'

const Dot = {
  template: DotTemplate,
  data: function() { return {dotInput: ""}},
  methods: {
      getDotInput: function(input) {
          if (input.trim() !== '') {
              this.$root.$emit('dot', this.dotInput)
          } else {
              alert('Please enter a dot!')
          }
          
          
        
      }
  }
}

export { Dot }