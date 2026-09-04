```html
<style>
  ion-modal {
    --height: fit-content;
    --width: 90%;
    --border-radius: 8px;
    --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  }
</style>

<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">Open Modal</ion-button>

  <ion-modal trigger="open-modal">
    <ion-header>
      <ion-toolbar>
        <ion-title>Modal</ion-title>
        <ion-buttons slot="end">
          <ion-button onclick="modal.dismiss()">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list lines="full">
        <ion-item>
          <ion-label>Item 1</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Item 2</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Item 3</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-modal>
</ion-content>

<script>
  var modal = document.querySelector('ion-modal');
</script>
```
