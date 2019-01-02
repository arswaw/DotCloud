import { Main } from './templates/Main.js'

import { Dot } from './components/dot.js'
import { Footer } from './components/footer.js'
import { Input } from './components/input.js'
import { Nav } from './components/nav.js'

/* global Vue */
new Vue({
    el: '#app',
    data: function() {
        return {
            dots: [
                {
                    name: "/u/arswaw",
                    handle: "@arswaw",
                    message: "This is the dot (tweet) message!",
                    date: "11/09/2019",
                    endorsements: 325
                },
                {
                    name: "/u/SarahMcBride",
                    handle: "@sarah",
                    message: "This is the dot (tweet) message!",
                    date: "12/02/2019",
                    endorsements: 162
                },
                {
                    name: "/u/DerrickLowe",
                    handle: "@derrick",
                    message: "This is the dot (tweet) message!",
                    date: "01/02/2019",
                    endorsements: 25
                },
                {
                    name: "/u/JaneDennis",
                    handle: "@jane",
                    message: "This is the dot (tweet) message!",
                    date: "10/04/2019",
                    endorsements: 0
                },
                {
                    name: "/u/MarvinMorris",
                    handle: "@marvin",
                    message: "This is the dot (tweet) message!",
                    date: "03/22/2019",
                    endorsements: 115
                },
                {
                    name: "/u/DorothyLee",
                    handle: "@dorothy",
                    message: "This is the dot (tweet) message!",
                    date: "04/5/2019",
                    endorsements: 3325
                },
                {
                    name: "/u/JoelChavez",
                    handle: "@joel",
                    message: "This is the dot (tweet) message!",
                    date: "01/02/2019",
                    endorsements: 1325
                },
            ]
        }
    },
    components: {
        'input-box': Input,
        'dot': Dot,
        'navbar': Nav,
        'footer-section': Footer
    },
    template: Main
})