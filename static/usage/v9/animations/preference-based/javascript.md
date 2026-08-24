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
    .duration(1500)
    .iterations(Infinity)
    .direction('alternate')
    .fromTo('background', 'blue', 'var(--background)');
</script>

<style>
  ion-card {
    color: white;
    opacity: 0.5;
    background: blue;
    margin: 10px;

    --background: red;
  }

  @media (prefers-color-scheme: dark) {
    ion-card {
      --background: green;
    }
  }
</style>
```
