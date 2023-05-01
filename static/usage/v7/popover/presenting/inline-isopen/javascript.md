```html
<ion-button>Click Me</ion-button>
<ion-popover>
  <ion-content class="ion-padding">Hello World!</ion-content>
</ion-popover>

<script>
  const button = document.querySelector('ion-button');
  const popover = document.querySelector('ion-popover');

  button.addEventListener('click', e => {
    popover.event = e;
    popover.isOpen = true;
  });

  popover.addEventListener('didDismiss', () => popover.isOpen = false);
</script>
```
