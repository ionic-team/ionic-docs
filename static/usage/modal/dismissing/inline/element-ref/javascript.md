```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Inline Modal</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <p class="ion-text-center">This is the main content</p>
    <ion-modal is-open="true">
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
          <ion-button slot="end" fill="clear" onclick="modal.dismiss()">Dismiss</ion-button>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding"> This is an example of an inline full-height modal. </ion-content>
    </ion-modal>
  </ion-content>
</ion-app>

<script>
  var modal = document.querySelector('ion-modal');
</script>
```
