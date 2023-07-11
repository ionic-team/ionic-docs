```html
<ion-card id="card">
  <ion-card-content>Card</ion-card-content>
</ion-card>

<ion-button id="play">Play</ion-button>
<ion-button id="pause">Pause</ion-button>
<ion-button id="stop">Stop</ion-button>

<script>
  const card = createAnimation()
    .addElement(document.querySelector('#card'))
    .duration(2000)
    .beforeStyles({
      opacity: 0.2
    })
    .beforeClearStyles(['background'])
    .afterStyles({
      background: 'rgba(0, 255, 0, 0.5)'
    })
    .afterClearStyles(['opacity'])
    .keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.5)' },
      { offset: 1, transform: 'scale(1)' }
    ]);

  document.querySelector('#play').addEventListener('click', async () => {
    await card.play();
  });

  document.querySelector('#pause').addEventListener('click', async () => {
    await card.pause();
  });

  document.querySelector('#stop').addEventListener('click', async () => {
    await card.stop();
  });
</script>
```
