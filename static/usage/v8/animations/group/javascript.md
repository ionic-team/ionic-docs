```html
<ion-card id="card-a">
  <ion-card-content>Card 1</ion-card-content>
</ion-card>

<ion-card id="card-b">
  <ion-card-content>Card 2</ion-card-content>
</ion-card>

<ion-card id="card-c">
  <ion-card-content>Card 3</ion-card-content>
</ion-card>

<ion-button onclick="animation.play()">Play</ion-button>
<ion-button onclick="animation.pause()">Pause</ion-button>
<ion-button onclick="animation.stop()">Stop</ion-button>

<script>
  const cardA = createAnimation()
    .addElement(document.querySelector('#card-a'))
    .keyframes([
      { offset: 0, transform: 'scale(1) rotate(0)' },
      { offset: 0.5, transform: 'scale(1.5) rotate(45deg)' },
      { offset: 1, transform: 'scale(1) rotate(0) ' },
    ]);

  const cardB = createAnimation()
    .addElement(document.querySelector('#card-b'))
    .keyframes([
      { offset: 0, transform: 'scale(1)', opacity: '1' },
      { offset: 0.5, transform: 'scale(1.5)', opacity: '0.3' },
      { offset: 1, transform: 'scale(1)', opacity: '1' },
    ]);

  const cardC = createAnimation()
    .addElement(document.querySelector('#card-c'))
    .duration(5000)
    .keyframes([
      { offset: 0, transform: 'scale(1)', opacity: '0.5' },
      { offset: 0.5, transform: 'scale(0.5)', opacity: '1' },
      { offset: 1, transform: 'scale(1)', opacity: '0.5' },
    ]);

  var animation = createAnimation().duration(2000).iterations(Infinity).addAnimation([cardA, cardB, cardC]);
</script>
```
