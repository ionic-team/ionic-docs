```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Controller Modal</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button expand="block" onclick="openModal()">Open</ion-button>
    <p id="message">This modal example uses the modalController to present and dismiss modals.</p>
  </ion-content>
</ion-app>

<script>
  var openModal = async () => {
    const div = document.createElement('div');
    div.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-button class="ion-no-margin" slot="start" fill="clear" color="medium" onclick="cancel()">Cancel</ion-button>
          <ion-title>Welcome</ion-title>
          <ion-button class="ion-no-margin" slot="end" fill="clear" onclick="confirm()">Confirm</ion-button>
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
