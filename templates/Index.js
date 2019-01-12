const IndexTemplate = 
`<div>
  <input-box></input-box>
  <div class="row columns is-multiline">
    <dot v-bind:dot="dot" v-bind:key="dot.dotId" v-for="dot of dots"></dot>
  </div>
</div>`

export { IndexTemplate }