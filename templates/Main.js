const Main = 
`
<div>
<navbar></navbar>
<div class="container">
<div id="flow">
    <span class="flow-1"></span>
    <span class="flow-2"></span>
    <span class="flow-3"></span>
</div>
<div class="section">
    <dot></dot>
    <div class="row columns is-multiline">
        <grid v-bind:dot="dot" v-for="dot of dots"></grid>
    </div>
</div>

</div>
<footer-section></footer-section>
</div>
`

export { Main }