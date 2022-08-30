```html
<ion-button onclick="presentToast()">Click Me</ion-button>

<script>
  async function presentToast() {
    const toast = document.createElement('ion-toast');
    toast.message = 'Hello World!';
    toast.duration = 1500;
    toast.icon = 'globe';

    document.body.appendChild(toast);
    await toast.present();
  }
</script>
```
