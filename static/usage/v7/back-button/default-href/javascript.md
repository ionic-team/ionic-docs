```html
<ion-app>
  <ion-router>
    <ion-route url="/one" component="page-one"></ion-route>
    <ion-route url="/two" component="page-two"></ion-route>

    <ion-route-redirect from="/" to="/two" />
  </ion-router>

  <ion-router-outlet></ion-router-outlet>
</ion-app>

<script>
  class PageOne extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-title>Back Button</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <h1>Page One</h1>
        <p>Navigate to the next page to see the back button.</p>
        <ion-router-link href="/two">
          <ion-button>Navigate</ion-button>
        </ion-router-link>
      </ion-content>
    `;
    }
  }

  class PageTwo extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/one"></ion-back-button>
          </ion-buttons>
          <ion-title>Back Button</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <h1>Page Two</h1>
        <p>Use the back button to navigate to the previous page.</p>
      </ion-content>
    `;
    }
  }

  customElements.define('page-one', PageOne);
  customElements.define('page-two', PageTwo);
</script>
```
