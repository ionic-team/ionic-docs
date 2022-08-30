```html
<ion-button expand="block" onclick="presentToast('top')">Present Toast At the Top</ion-button>
<ion-button expand="block" onclick="presentToast('middle')">Present Toast At the Middle</ion-button>
<ion-button expand="block" onclick="presentToast('bottom')">Present Toast At the Bottom</ion-button>

<script>
  async function presentToast(position) {
    const toast = document.createElement('ion-toast');
    toast.message = 'Hello World!';
    toast.duration = 1500;
    toast.position = position;

    document.body.appendChild(toast);
    await toast.present();
  }
</script>
```
