```html
<div class="ion-page">
  <ion-header>
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">Open</ion-button>

    <ion-modal trigger="open-modal">
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
          <ion-buttons slot="end">
            <ion-button onclick="dismiss()">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <p class="ion-padding-horizontal">You must accept the terms and conditions to close this modal.</p>
        <ion-item>
          <ion-label class="ion-text-wrap" for="terms">Do you accept the terms and conditions?</ion-label>
          <ion-checkbox id="terms"></ion-checkbox>
        </ion-item>
      </ion-content>
    </ion-modal>
  </ion-content>
</div>

<script>
  var modal = document.querySelector('ion-modal');

  modal.canDismiss = false;
  modal.presentingElement = document.querySelector('.ion-page');

  function dismiss() {
    modal.dismiss();
  }

  modal.addEventListener('didPresent', () => {
    var terms = document.getElementById('terms');
    terms.addEventListener('ionChange', (ev) => {
      modal.canDismiss = ev.detail.checked;
    });
  });
</script>
```
