```html
<ion-button onclick="presentAlert()">Click Me</ion-button>

<script>
  async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Please enter your info';
    alert.buttons = ['OK'];
    alert.inputs = [
      {
        placeholder: 'Name'
      },
      {
        placeholder: 'Nickname (max 8 characters)',
        attributes: {
          maxlength: 8
        }
      },
      {
        type: 'number',
        placeholder: 'Age',
        min: 1,
        max: 100
      },
      {
        type: 'textarea',
        placeholder: 'A little about yourself'
      }
    ];

    document.body.appendChild(alert);
    await alert.present();
  }
</script>
```
