```html
<ion-header>
  <ion-toolbar>
    <ion-title>Controller Modal</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button expand="block" onclick="openModal()">Open</ion-button>
  <p id="message">This modal example uses the modalController to present and dismiss modals.</p>
</ion-content>

<script>
  var openModal = async () => {
    const div = document.createElement('div');
    div.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button color="medium" onclick="cancel()">Cancel</ion-button>
          </ion-buttons>
          <ion-title>Welcome</ion-title>
          <ion-buttons slot="end">
            <ion-button onclick="confirm()">Confirm</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item>
          <ion-label position="stacked">Enter your name</ion-label>
          <ion-input type="text" placeholder="Your name"></ion-input>
        </ion-item>
      </ion-content>
      `;

    const modal = await modalController.create({
      component: div,
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      document.querySelector('#message').innerHTML = `Hello, ${data}!`;
    }
  };

  function cancel() {
    modalController.dismiss(null, 'cancel');
  }

  function confirm() {
    const input = document.querySelector('ion-input');
    modalController.dismiss(input.value, 'confirm');
  }
</script>
```
