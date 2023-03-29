```html
<ion-button onclick="presentToast()">Click Me</ion-button>

<script>
  async function presentToast() {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      icon: 'globe'
    });
      
    await toast.present();
  }
</script>
```
