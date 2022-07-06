```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Modal Navigation</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-button id="openModal">Open Modal</ion-button>
    <ion-modal trigger="openModal">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button id="backButton" disabled="true" onclick="navigateBack()">
              <ion-icon slot="icon-only" name="chevron-back-outline"></ion-icon>
            </ion-button>
          </ion-buttons>
          <ion-title>Modal</ion-title>
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
  const backButton = document.querySelector('#backButton');

  modal.addEventListener('willPresent', () => {
    nav.push('page-one');
  });

  const navigate = (component) => {
    nav.push(component);
    backButton.disabled = false;
  };

  const navigateBack = () => {
    nav.pop();
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
        </ion-content>
      `;
    }
  }

  customElements.define('page-one', PageOne);
  customElements.define('page-two', PageTwo);
  customElements.define('page-three', PageThree);
</script>
```
