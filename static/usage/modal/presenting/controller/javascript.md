```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Controller Modal</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button onclick="openModal()">Open Modal</ion-button>
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
        This is an example of a controller full-height modal.
      </ion-content>
      `;

    let modal = await modalController.create({
      component: div,
    });

    modal.present();
  };

  var dismiss = () => {
    const modal = document.querySelector('ion-modal');
    modal.dismiss();
  };
</script>
```
