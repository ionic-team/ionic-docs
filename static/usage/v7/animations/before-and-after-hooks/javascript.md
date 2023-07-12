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
      opacity: 0.2,
    })
    .beforeClearStyles(['background'])
    .afterStyles({
      background: 'rgba(0, 255, 0, 0.5)',
    })
    .afterClearStyles(['opacity'])
    .keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.5)' },
      { offset: 1, transform: 'scale(1)' },
    ]);
</script>
```
