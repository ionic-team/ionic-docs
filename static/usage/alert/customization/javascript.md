```html
<ion-button onclick="presentAlert()">Click Me</ion-button>

<script>
  async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Are you sure?';
    alert.cssClass = 'custom-alert';
    alert.buttons = [
      'No',
      {
        text: 'Yes, I\'m sure',
        cssClass: 'alert-button-danger'
      }
    ];

    document.body.appendChild(alert);
    await alert.present();
  }
</script>

<style>
  ion-alert.custom-alert {
    --backdrop-opacity: 0.7;
  }

  .custom-alert .alert-button-group {
    padding: 8px;
  }

  button.alert-button.alert-button-danger {
    background-color: var(--ion-color-danger);
    color: var(--ion-color-danger-contrast);
  }

  .md button.alert-button.alert-button-danger {
    border-radius: 5px;
  }

  .ios button.alert-button.alert-button-danger {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>
```
