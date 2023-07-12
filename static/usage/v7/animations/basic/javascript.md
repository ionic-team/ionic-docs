```html
<ion-card id="card">
  <ion-card-content>Card</ion-card-content>
</ion-card>

<ion-button id="play" onclick="animation.play()">Play</ion-button>
<ion-button id="pause" onclick="animation.pause()">Pause</ion-button>
<ion-button id="stop" onclick="animation.stop()">Stop</ion-button>

<script>
  var animation = createAnimation()
    .addElement(document.querySelector('#card'))
    .duration(1500)
    .iterations(Infinity)
    .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
    .fromTo('opacity', '1', '0.2');
</script>
```
