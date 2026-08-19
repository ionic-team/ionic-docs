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

<ion-button onclick="play()">Play</ion-button>
<ion-button onclick="pause()">Pause</ion-button>
<ion-button onclick="stop()">Stop</ion-button>

<script>
  const cardA = createAnimation()
    .addElement(document.querySelector('#card-a'))
    .fill('none')
    .duration(1000)
    .keyframes([
      { offset: 0, transform: 'scale(1) rotate(0)' },
      { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
      { offset: 1, transform: 'scale(1) rotate(0)' },
    ]);

  const cardB = createAnimation()
    .addElement(document.querySelector('#card-b'))
    .fill('none')
    .duration(1000)
    .keyframes([
      { offset: 0, transform: 'scale(1)', opacity: '1' },
      { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
      { offset: 1, transform: 'scale(1)', opacity: '1' },
    ]);

  const cardC = createAnimation()
    .addElement(document.querySelector('#card-c'))
    .fill('none')
    .duration(1000)
    .keyframes([
      { offset: 0, transform: 'scale(1)', opacity: '0.5' },
      { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
      { offset: 1, transform: 'scale(1)', opacity: '0.5' },
    ]);

  async function play() {
    await cardA.play();
    await cardB.play();
    await cardC.play();
  }

  function pause() {
    cardA.pause();
    cardB.pause();
    cardC.pause();
  }

  function stop() {
    cardA.stop();
    cardB.stop();
    cardC.stop();
  }
</script>
```
