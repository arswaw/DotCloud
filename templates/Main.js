const Main = 
`<div>
    <navbar></navbar>
    <div class="container">
        <div id="flow">
            <span class="flow-1"></span>
            <span class="flow-2"></span>
            <span class="flow-3"></span>
        </div>
        <div class="section">
            <input-box></input-box>
            <div class="row columns is-multiline">
                <dot v-bind:dot="dot" v-for="dot of dots"></dot>
            </div>
        </div>
    </div>
    <footer-section></footer-section>
</div>`

export { Main }