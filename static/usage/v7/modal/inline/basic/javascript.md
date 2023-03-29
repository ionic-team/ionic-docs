```html
<ion-header>
  <ion-toolbar>
    <ion-title>Inline Modal</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">Open</ion-button>
  <p id="message">This modal example uses triggers to automatically open a modal when the button is clicked.</p>
  <ion-modal trigger="open-modal">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button onclick="cancel()">Cancel</ion-button>
        </ion-buttons>
        <ion-title>Welcome</ion-title>
        <ion-buttons slot="end">
          <ion-button onclick="confirm()" strong="true">Confirm</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="stacked">Enter your name</ion-label>
        <ion-input type="text" placeholder="Your name"></ion-input>
      </ion-item>
    </ion-content>
  </ion-modal>
</ion-content>

<script>
  var modal = document.querySelector('ion-modal');

  function cancel() {
    modal.dismiss(null, 'cancel');
  }

  function confirm() {
    const input = document.querySelector('ion-input');
    modal.dismiss(input.value, 'confirm');
  }

  modal.addEventListener('willDismiss', (ev) => {
    if (ev.detail.role === 'confirm') {
      const message = document.querySelector('#message');
      message.textContent = `Hello ${ev.detail.data}!`;
    }
  });
</script>
```
