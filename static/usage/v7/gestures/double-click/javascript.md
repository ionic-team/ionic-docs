```html
<ion-card>
  <ion-card-content>Double click me to move the card.</ion-card-content>
</ion-card>

<style>
  ion-card {
    transform: translateX(0);
    user-select: none;
  }
</style>

<script>
  const DOUBLE_CLICK_THRESHOLD = 500;
  const card = document.querySelector('ion-card');
  const gesture = createGesture({
    el: card,
    threshold: 0,
    onStart: () => onStart(),
    gestureName: 'double-click',
  });

  gesture.enable();

  let lastOnStart = 0;
  let currentOffset = 0;

  const onStart = () => {
    const now = Date.now();

    if (Math.abs(now - lastOnStart) <= DOUBLE_CLICK_THRESHOLD) {
      card.style.setProperty('transform', getNewTransform());
      lastOnStart = 0;
    } else {
      lastOnStart = now;
    }
  };

  const getNewTransform = () => {
    if (currentOffset >= 100) {
      currentOffset = 0;
    } else {
      currentOffset += 20;
    }

    return `translateX(${currentOffset}px)`;
  };
</script>
```
