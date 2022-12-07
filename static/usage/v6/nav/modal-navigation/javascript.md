```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Modal Navigation</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="openModal">Open Modal</ion-button>
    <ion-modal trigger="openModal">
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
          <ion-buttons slot="end">
            <ion-button onclick="dismiss()"> Close </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-nav></ion-nav>
      </ion-content>
    </ion-modal>
  </ion-content>
</ion-app>

<script>
  const modal = document.querySelector('ion-modal');
  const nav = document.querySelector('ion-nav');

  modal.addEventListener('willPresent', () => {
    nav.setRoot('page-one');
  });

  var dismiss = () => modal.dismiss();

  var navigate = (component) => {
    nav.push(component);
  };

  var navigateBack = () => {
    nav.pop();
  };

  var navigateToRoot = () => {
    nav.popToRoot();
  };

  class PageOne extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-content class="ion-padding">
          <h1>Page One</h1>
          <ion-button onclick="navigate('page-two')">Go to Page Two</ion-button>
        </ion-content>
      `;
    }
  }

  class PageTwo extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-content class="ion-padding">
          <h1>Page Two</h1>
          <ion-button onclick="navigate('page-three')">Go to Page Three</ion-button>
        </ion-content>
      `;
    }
  }

  class PageThree extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-content class="ion-padding">
          <h1>Page Three</h1>
          <ion-button onclick="navigateBack()">Go Back</ion-button>
          <ion-button onclick="navigateToRoot()">Go to Root</ion-button>
        </ion-content>
      `;
    }
  }

  customElements.define('page-one', PageOne);
  customElements.define('page-two', PageTwo);
  customElements.define('page-three', PageThree);
</script>
```
