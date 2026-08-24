```html
<!-- The router drives URL-based navigation through ion-router-outlet -->
<ion-router>
  <ion-route url="/" component="page-home"></ion-route>
  <ion-route url="/details" component="page-details"></ion-route>
</ion-router>

<ion-router-outlet></ion-router-outlet>

<script>
  // A routed page: navigating here updates the URL to /details.
  class PageHome extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-router-link href="#/details">
        <ion-button>Go to Details (URL changes)</ion-button>
      </ion-router-link>
    </ion-content>`;
    }
  }

  // This routed page hosts its own ion-nav for a local stack.
  // Pushing and popping within the ion-nav does not change the URL.
  class PageDetails extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<ion-nav root="details-step-one"></ion-nav>`;
    }
  }

  class DetailsStepOne extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Details - Step 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-nav-link router-direction="forward" component="details-step-two">
        <ion-button>Next step (URL stays the same)</ion-button>
      </ion-nav-link>
    </ion-content>`;
    }
  }

  class DetailsStepTwo extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Details - Step 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      The URL is still /details. This step is managed by ion-nav, not the router.
    </ion-content>`;
    }
  }

  customElements.define('page-home', PageHome);
  customElements.define('page-details', PageDetails);
  customElements.define('details-step-one', DetailsStepOne);
  customElements.define('details-step-two', DetailsStepTwo);
</script>
```
