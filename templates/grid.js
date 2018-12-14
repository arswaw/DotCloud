const GridTemplate = `
<div class="column is-one-third">
                    <div class="card large" style="height:auto">
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-96x96">
                                        <img src="https://via.placeholder.com/96x96" alt="Image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4 no-padding">{{tweet.name}}</p>
                                    <p><span class="title is-6"><a href="http://twitter.com/#">{{tweet.handle}}</a></span></p>
                                    <p class="subtitle is-6">{{tweet.job}}</p>
                                </div>
                            </div>
                            <div class="content">
                                {{tweet.bio}}
                                <div class="background-icon"><span class="icon-twitter"></span></div>
                            </div>
                        </div>
                    </div>
               
`

export { GridTemplate }