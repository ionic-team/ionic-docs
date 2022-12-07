```html
<style>
  .counter__section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>

<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <p>You can interact with the +/- buttons until the sheet is fully expanded.</p>

  <div class="counter__section">
    <ion-button id="decrement" onclick="decrement()">-</ion-button>
    <p id="counter">0</p>
    <ion-button id="increment" onclick="increment()">+</ion-button>
  </div>

  <ion-modal is-open="true" initial-breakpoint="0.25" backdrop-dismiss="false" backdrop-breakpoint="0.5">
    <ion-content>
      <ion-searchbar placeholder="Search"></ion-searchbar>
      <ion-list>
        <ion-item>
          <ion-avatar slot="start">
            <ion-img src="https://i.pravatar.cc/300?u=b" />
          </ion-avatar>
          <ion-label>
            <h2>Connor Smith</h2>
            <p>Sales Rep</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <ion-img src="https://i.pravatar.cc/300?u=a" />
          </ion-avatar>
          <ion-label>
            <h2>Daniel Smith</h2>
            <p>Product Designer</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <ion-img src="https://i.pravatar.cc/300?u=d" />
          </ion-avatar>
          <ion-label>
            <h2>Greg Smith</h2>
            <p>Director of Operations</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <ion-img src="https://i.pravatar.cc/300?u=e" />
          </ion-avatar>
          <ion-label>
            <h2>Zoey Smith</h2>
            <p>CEO</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-modal>
</ion-content>

<script>
  var modal = document.querySelector('ion-modal');
  var searchBar = document.querySelector('ion-searchbar');

  modal.breakpoints = [0, 0.25, 0.5, 0.75];

  searchBar.addEventListener('click', () => {
    modal.setCurrentBreakpoint(0.75);
  });

  function increment() {
    const counter = document.querySelector('#counter');
    counter.innerHTML = parseInt(counter.innerText) + 1;
  }

  function decrement() {
    const counter = document.querySelector('#counter');
    counter.innerHTML = parseInt(counter.innerText) - 1;
  }
</script>
```
