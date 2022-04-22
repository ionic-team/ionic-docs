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
          <ion-title>Modal</ion-title>
          <ion-button slot="end" fill="clear" onclick="dismiss()">Dismiss</ion-button>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item>
          <ion-label>Enter your name</ion-label>
          <ion-input type="text" placeholder="Your name"></ion-input>
        </ion-item>
      </ion-content>
    </ion-modal>
  </ion-content>
</ion-app>

<script>
  const modal = document.querySelector('ion-modal');

  function dismiss() {
    const input = document.querySelector('ion-input');
    modal.dismiss(input.value);
  }

  modal.addEventListener('didDismiss', (ev) => {
    const message = document.querySelector('#message');
    message.textContent = `Hello ${ev.detail.data}!`;
  });
</script>
```
