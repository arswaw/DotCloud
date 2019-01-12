const HomeTemplate = 
`<div>
  <input-box></input-box>
  <div class="row columns is-multiline">
    <dot :dots="dots" :dot="dot" :key="dot.id" v-for="dot of dots"></dot>
  </div>
</div>`

export { HomeTemplate }