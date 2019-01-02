import { GridTemplate } from '../templates/Grid.js'

const Grid = {
    props: ['dot'],
    template: GridTemplate,
    data: function() { return {dots: []}},
    mounted: function() {
        this.$root.$on('dot', dot => {
            this.dots.push(dot);
            console.info("saving dot", dot)
            console.log("dots:");
            console.log(this.dots);
        })
    }
}

export { Grid }