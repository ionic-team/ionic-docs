```html
<ion-button>Click Me</ion-button>

<script>
  async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Alert!';
    alert.cssClass = 'custom-alert';
    alert.buttons = [
      'OK',
      {
        text: 'Wow!',
        cssClass: 'custom-alert-button'
      }
    ];

    document.body.appendChild(alert);
    await alert.present();
  }

  const button = document.querySelector('ion-button');
  button.addEventListener('click', presentAlert);
</script>

<style>
  ion-alert.custom-alert {
    --backdrop-opacity: 0.7;
  }
    
  .custom-alert .alert-wrapper {
    box-shadow: 5px 5px 5px 0 #0000ff;
  }

  .custom-alert .alert-button-group {
    background-color: #d3d3ff;
  }

  button.alert-button.custom-alert-button {
    color: #8600c9;
  }
</style>
```
