```html
<div class="container">
  <div class="track">
    <ion-card id="card" button="true">
      <ion-card-content>Card</ion-card-content>
    </ion-card>
  </div>
</div>

<p>Drag the square along the track.</p>

<style>
  .container {
    display: flex;
  }

  .track {
    width: 344px;

    background: var(--ion-color-medium);

    padding: 16px;
  }

  ion-card {
    width: 100px;

    box-shadow: none;

    margin: 0px;
  }
</style>

<script>
  let initialStep = 0;
  let started = false;

  const card = document.querySelector('ion-card');

  /**
   * The track is 344px wide.
   * The card is 100px wide.
   * We want 16px of margin on each end of the track.
   */
  const MAX_TRANSLATE = 344 - 100 - 32;

  const animation = createAnimation()
    .addElement(card)
    .duration(1000)
    .fromTo('transform', 'translateX(0)', `translateX(${MAX_TRANSLATE}px)`);

  const gesture = createGesture({
    el: card,
    threshold: 0,
    gestureName: 'card-drag',
    onMove: (ev) => onMove(ev),
    onEnd: (ev) => onEnd(ev),
  });

  gesture.enable(true);

  var onMove = (ev) => {
    if (!started) {
      animation.progressStart();
      started = true;
    }

    animation.progressStep(getStep(ev));
  };

  var onEnd = (ev) => {
    if (!started) {
      return;
    }

    gesture.enable(false);

    const step = getStep(ev);
    const shouldComplete = step > 0.5;

    animation.progressEnd(shouldComplete ? 1 : 0, step).onFinish(() => {
      gesture.enable(true);
    });

    initialStep = shouldComplete ? MAX_TRANSLATE : 0;
    started = false;
  };

  var clamp = (min, n, max) => {
    return Math.max(min, Math.min(n, max));
  };

  var getStep = (ev) => {
    const delta = initialStep + ev.deltaX;
    return clamp(0, delta / MAX_TRANSLATE, 1);
  };
</script>
```
