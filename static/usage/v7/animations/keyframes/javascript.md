```html
<div class="square" style="width: 100px; height: 100px; background: red; --background: yellow;"></div>
<ion-button onclick="animation.play()">Play</ion-button>
<ion-button onclick="animation.pause()">Pause</ion-button>
<ion-button onclick="animation.stop()">Stop</ion-button>

<script>
  var animation = createAnimation()
    .addElement(document.querySelector('.square'))
    .duration(3000)
    .iterations(Infinity)
    .keyframes([
      { offset: 0, background: 'red' },
      { offset: 0.72, background: 'var(--background)' },
      { offset: 1, background: 'green' },
    ]);
</script>
```
