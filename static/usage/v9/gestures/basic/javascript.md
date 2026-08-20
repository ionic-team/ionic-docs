```html
<style>
  ion-card {
    position: absolute;

    left: 0;
    right: 0;

    user-select: none;
  }

  ion-card.active {
    box-shadow: var(--ion-color-warning) 0px 4px 16px;
  }
</style>

<ion-card>
  <ion-card-header>
    <ion-card-subtitle>Pan the Screen</ion-card-subtitle>
  </ion-card-header>
  <ion-card-content>
    <p id="debug">Gesture information will display after interaction.</p>
  </ion-card-content>
</ion-card>

<script>
  const p = document.querySelector('#debug');
  const target = document.querySelector('ion-content');
  const card = document.querySelector('ion-card');

  const onMove = (detail) => {
    const { type, currentX, deltaX, velocityX } = detail;
    p.innerHTML = `
    <div>Type: ${type}</div>
    <div>Current X: ${currentX}</div>
    <div>Delta X: ${deltaX}</div>
    <div>Velocity X: ${velocityX}</div>`;
  };

  const onStart = () => {
    card.classList.add('active');
  };

  const onEnd = () => {
    card.classList.remove('active');
  };

  const gesture = createGesture({
    el: target,
    onStart,
    onMove,
    onEnd,
    gestureName: 'example',
  });

  gesture.enable();
</script>
```
