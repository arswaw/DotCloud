import { DotTemplate } from '../templates/Dot.js'

const Dot = {
    props: ['dot'],
    template: DotTemplate,
    data: function() { return {dots: []}},
    mounted: function() {
        this.$root.$on('dot', dot => {
            this.dots.push(dot);
            console.info("saving dot: ", dot)
            console.log("dots:")
            console.log(this.dots)
        })
    }
}

export { Dot }