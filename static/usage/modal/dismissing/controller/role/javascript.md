```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Controller Modal</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <div id="message"></div>
  </ion-content>
</ion-app>

<script>
  var openModal = async () => {
    const div = document.createElement('div');
    div.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-button slot="start" fill="clear" onclick="modalController.dismiss(null, 'cancel')">Cancel</ion-button>
          <ion-title>Modal</ion-title>
          <ion-button slot="end" fill="clear" onclick="modalController.dismiss(null, 'confirm')">Confirm</ion-button>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>Select a button to dismiss the modal.</p>
      </ion-content>`;

    const modal = await modalController.create({
      component: div,
    });

    modal.present();

    const { role } = await modal.onDidDismiss();

    document.querySelector('#message').innerHTML = `Modal was dismissed with role: ${role}`;
  };

  openModal();
</script>
```
