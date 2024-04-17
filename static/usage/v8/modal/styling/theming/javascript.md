```html
<style>
  ion-modal {
    --height: 50%;
    --border-radius: 16px;
    --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  ion-modal::part(backdrop) {
    background: rgba(209, 213, 219);
    opacity: 1;
  }

  ion-modal ion-toolbar {
    --background: rgb(14 116 144);
    --color: white;
  }
</style>

<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">Open Modal</ion-button>

    <ion-modal trigger="open-modal">
      <ion-content>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
          <ion-buttons slot="end">
            <ion-button color="light" onclick="modal.dismiss()">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
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
</ion-app>

<script>
  var modal = document.querySelector('ion-modal');

  function dismiss() {
    modal.dismiss();
  }
</script>
```
