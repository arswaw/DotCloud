import { DotTemplate } from '../templates/Dot.js'

const Dot = {
  props: [ 'dots', 'dot' ],
  template: DotTemplate,
  mounted: function () {
    this.$root.$on('new-dot', newDot => {
      if (this.dots.findIndex(dot => dot.id === newDot.id) !== -1) return;
      
      this.dots.push(newDot)
      localStorage.setItem("dots", JSON.stringify(this.dots))
    })
  }
}

export { Dot }