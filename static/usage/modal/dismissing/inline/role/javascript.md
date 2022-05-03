```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Inline Modal</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <p class="ion-text-center" id="message"></p>
    <ion-modal is-open="true">
      <ion-header>
        <ion-toolbar>
          <ion-button slot="start" fill="clear" onclick="dismiss('cancel')">Cancel</ion-button>
          <ion-title>Modal</ion-title>
          <ion-button slot="end" fill="clear" onclick="dismiss('confirm')">Confirm</ion-button>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>Select a button to dismiss the modal.</p>
      </ion-content>
    </ion-modal>
  </ion-content>
</ion-app>

<script>
  const modal = document.querySelector('ion-modal');

  function dismiss(role) {
    modal.dismiss(null, role);
  }

  modal.addEventListener('didDismiss', (ev) => {
    const message = document.querySelector('#message');
    message.textContent = `Modal was dismissed with role: ${ev.detail.role}`;
  });
</script>
```
