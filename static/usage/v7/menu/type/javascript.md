```html
<ion-menu type="overlay" content-id="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>Menu Content</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-menu-toggle>
      <ion-button>Click to close the menu</ion-button>
    </ion-menu-toggle>
  </ion-content>
</ion-menu>

<div class="ion-page" id="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h2>Select an overlay type:</h2>
    <ion-radio-group value="overlay">
      <ion-item>
        <ion-radio value="overlay">
          <code>overlay</code>
        </ion-radio>
      </ion-item>
      <ion-item>
        <ion-radio value="reveal">
          <code>reveal</code>
        </ion-radio>
      </ion-item>
      <ion-item>
        <ion-radio value="push">
          <code>push</code>
        </ion-radio>
      </ion-item>
    </ion-radio-group>
    <br />
    <ion-menu-toggle>
      <ion-button>Click to open the menu</ion-button>
    </ion-menu-toggle>
  </ion-content>
</div>

<script>
  const menu = document.querySelector('ion-menu');
  const radioGroup = document.querySelector('ion-radio-group');

  radioGroup.addEventListener('ionChange', (ev) => {
    menu.type = ev.detail.value;
  });
</script>
```
