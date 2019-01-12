const AppTemplate = 
`<div>
  <navbar></navbar>
    <div class="container">
      <div id="flow">
        <span class="flow-1"></span>
        <span class="flow-2"></span>
        <span class="flow-3"></span>
      </div>
      <div class="section">
        <router-view></router-view>
      </div>
    </div>
  <footer-section></footer-section>
</div>`

export { AppTemplate }