import { InputTemplate } from '../templates/Input.js'

const Input = {
    template: InputTemplate,
    data: function() { return { dotMessage: "" } },
    methods: {
        storeDotInLocalStorage: function () {
            let dots = localStorage.getItem("dots");

            if (dots === null) {
                dots = [];
            } else {
                dots = JSON.parse(dots);
            }

            dots.push({
                // dotId is a 16 digit random number
                dotId: Math.random().toString().slice(3),
                name: "/u/amir",
                handle: "@amir",
                message: this.dotMessage,
                date: new Date(Date.now()).toLocaleDateString(),
                endorsements: 0
            });

            this.dotMessage = "";
            this.$root.dots = dots;
            localStorage.setItem("dots", JSON.stringify(dots));
        } 
    }
}

export { Input }