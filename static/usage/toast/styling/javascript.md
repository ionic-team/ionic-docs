```html
<ion-button onclick="presentToast()">Click Me</ion-button>

<script>
  async function presentToast() {
    const toast = document.createElement('ion-toast');
    toast.message = 'Hello Styled World!';
    toast.duration = 3000;
    toast.cssClass = 'custom-toast';
    toast.buttons = [
      {
        text: 'Dismiss',
        role: 'cancel'
      }
    ];

    document.body.appendChild(toast);
    await toast.present();
  }
</script>

<style>
  ion-toast.custom-toast {
    --background: darkblue;
    --button-color: lightblue;
    --color: white;
  }
    
  ion-toast.custom-toast::part(message) {
    font-style: italic;
  }

  ion-toast.custom-toast::part(button) {
    border-left: 1px solid white;
  }
</style>
```
