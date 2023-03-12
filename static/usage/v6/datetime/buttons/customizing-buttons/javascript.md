```html
<ion-datetime>
  <ion-buttons slot="buttons">
    <ion-button color="danger" onclick="datetime.reset()">Reset</ion-button>
    <ion-button color="primary" onclick="datetime.cancel()">Never mind</ion-button>
    <ion-button color="primary" onclick="datetime.confirm()">All Set</ion-button>
  </ion-buttons>
</ion-datetime>

<script>
  var datetime = document.querySelector('ion-datetime');
</script>
```
