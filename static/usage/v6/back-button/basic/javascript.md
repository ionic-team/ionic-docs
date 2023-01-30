```html
<ion-app>
  <ion-nav root="page-one"></ion-nav>
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
        <ion-nav-link router-direction="forward" component="page-two">
          <ion-button>Navigate</ion-button>
        </ion-nav-link>
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
            <ion-back-button></ion-back-button>
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
