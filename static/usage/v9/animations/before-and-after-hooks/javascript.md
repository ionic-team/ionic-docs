```html
<ion-card id="card">
  <ion-card-content>Card</ion-card-content>
</ion-card>

<ion-button onclick="animation.play()">Play</ion-button>
<ion-button onclick="animation.pause()">Pause</ion-button>
<ion-button onclick="animation.stop()">Stop</ion-button>

<script>
  var animation = createAnimation()
    .addElement(document.querySelector('#card'))
    .duration(2000)
    .beforeStyles({
      filter: 'invert(75%)',
    })
    .beforeClearStyles(['box-shadow'])
    .afterStyles({
      'box-shadow': 'rgba(255, 0, 50, 0.4) 0px 4px 16px 6px',
    })
    .afterClearStyles(['filter'])
    .keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.5)' },
      { offset: 1, transform: 'scale(1)' },
    ]);
</script>
```
