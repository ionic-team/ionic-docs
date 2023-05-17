```html
<ion-button onclick="presentBaselineToast()">Open Baseline Layout Toast</ion-button>
<ion-button onclick="presentStackedToast()">Click Stacked Layout Toast</ion-button>

<script>
  async function presentToast(opts) {
    const toast = await toastController.create(opts);

    await toast.present();
  }

  async function presentBaselineToast() {
    await presentToast({
      duration: 3000,
      message: 'This is a toast with a long message and a button that appears on the same line.',
      buttons: [{ text: 'Action With Long Text' }],
    });
  }

  async function presentStackedToast() {
    await presentToast({
      duration: 3000,
      message: 'This is a toast with a long message and a button that appears on the next line.',
      buttons: [{ text: 'Action With Long Text' }],
      layout: 'stacked',
    });
  }
</script>
```
