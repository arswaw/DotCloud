const InputTemplate =
`<div class="box">
  <article class="media">
    <div class="media-content">
      <div class="field">
        <p class="control">
          <input v-model="dotMessage" class="input" type="text" placeholder="Say something...">
        </p>
      </div>
    </div>
  </article>

  <div class="media" v-if="dotMessage">
    <button @click="storeDotInLocalStorage()" class="button is-link">Send</button>
  </div>
</div>`

export { InputTemplate }
