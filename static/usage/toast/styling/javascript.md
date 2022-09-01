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
    --background: #F4F4FA;
    --box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.2);
    --color: #908F96;
  }
    
  ion-toast.custom-toast::part(message) {
    font-style: italic;
  }

  ion-toast.custom-toast::part(button) {
    border-left: 1px solid #d2d2d2;
    color: #030207;
    font-size: 15px;
  }
</style>
```
