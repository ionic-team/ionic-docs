```html
<ion-button expand="block" onclick="presentToast('top')">Present Toast At the Top</ion-button>
<ion-button expand="block" onclick="presentToast('middle')">Present Toast At the Middle</ion-button>
<ion-button expand="block" onclick="presentToast('bottom')">Present Toast At the Bottom</ion-button>

<script>
  async function presentToast(position) {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }
</script>
```
