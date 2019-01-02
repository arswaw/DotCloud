const DotTemplate =
`<div class="column is-one-third">
    <div class="card large" style="height:auto">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-96x96">
                        <img src="https://via.placeholder.com/96x96" alt="Image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4 no-padding">{{dot.name}}</p>
                    <p><span class="title is-6"><a href="http://twitter.com/#">{{dot.handle}}</a></span></p>
                    <p class="subtitle is-6">{{dot.date}}</p>
                </div>
            </div>
            <div class="content">
                {{dot.message}}
                <div class="background-icon"><span class="icon-twitter"></span></div>
            </div>
        </div>
    </div>
</div>`

export { DotTemplate }
