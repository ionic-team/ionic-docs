```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Controller Modal</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <div class="container">
      <div id="message"></div>
    </div>
  </ion-content>
</ion-app>

<script>
  var openModal = async () => {
    const div = document.createElement('div');
    div.innerHTML = `
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
      `;

    const modal = await modalController.create({
      component: div,
    });

    modal.present();

    const { data } = await modal.onDidDismiss();

    document.querySelector('#message').innerHTML = `Hello, ${data}!`;
  };

  var dismiss = () => {
    const input = document.querySelector('ion-input');
    modalController.dismiss(input.value);
  };

  openModal();
</script>
```
