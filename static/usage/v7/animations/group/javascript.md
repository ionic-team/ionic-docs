```html
<ion-card class="card-a">
  <ion-card-content>Card 1</ion-card-content>
</ion-card>

<ion-card class="card-b">
  <ion-card-content>Card 2</ion-card-content>
</ion-card>

<ion-card class="card-c">
  <ion-card-content>Card 2</ion-card-content>
</ion-card>

<ion-button id="play" onclick="animation.play()">Play</ion-button>
<ion-button id="pause" onclick="animation.pause()">Pause</ion-button>
<ion-button id="stop" onclick="animation.stop()">Stop</ion-button>

<script>
  const squareA = createAnimation()
    .addElement(document.querySelector('.card-a'))
    .keyframes([
      { offset: 0, transform: 'scale(1) rotate(0)' },
      { offset: 0.5, transform: 'scale(1.5) rotate(45deg)' },
      { offset: 1, transform: 'scale(1) rotate(0) '}
    ]);
  
  const squareB = createAnimation()
    .addElement(document.querySelector('.card-b'))
    .keyframes([
      { offset: 0, transform: 'scale(1)', opacity: '1' },
      { offset: 0.5, transform: 'scale(1.5)', opacity: '0.3' },
      { offset: 1, transform: 'scale(1)', opacity: '1' }
    ]);
  
  const squareC = createAnimation()
    .addElement(document.querySelector('.card-c'))
    .duration(5000)
    .keyframes([
      { offset: 0, transform: 'scale(1)', opacity: '0.5' },
      { offset: 0.5, transform: 'scale(0.5)', opacity: '1' },
      { offset: 1, transform: 'scale(1)', opacity: '0.5' }
    ]);
  
  var animation = createAnimation()
    .duration(2000)
    .iterations(Infinity)
    .addAnimation([squareA, squareB, squareC])
</script>
```
