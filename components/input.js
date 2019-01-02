import { InputTemplate } from '../templates/Input.js'

const Input = {
    template: InputTemplate,
    data: function() { return { dotInput: "" } },
    methods: {
        getDotInput: function (input) {
            if (input.trim() !== '') {
                this.$root.$emit('dot', this.dotInput)
            } else {
                alert('Please enter a dot!')
            }
        }
    }
}

export { Input }