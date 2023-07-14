```html
<ion-card id="card" style="width: 80px">
  <ion-card-content>Card</ion-card-content>
</ion-card>
<ion-button onclick="animation.play()">Play</ion-button>
<ion-button onclick="animation.pause()">Pause</ion-button>
<ion-button onclick="animation.stop()">Stop</ion-button>

<script>
  var animation = createAnimation()
    .addElement(document.querySelector('#card'))
    .duration(3000)
    .iterations(Infinity)
    .keyframes([
      { offset: 0, width: '80px' },
      { offset: 0.72, width: '160px' },
      { offset: 1, width: '240px' },
    ]);
</script>
```
