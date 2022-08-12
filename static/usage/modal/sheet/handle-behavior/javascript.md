```html
<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">Open Sheet Modal</ion-button>

  <ion-modal trigger="open-modal" initial-breakpoint="0.25" handle-behavior="cycle">
    <ion-content class="ion-padding">
      <div class="ion-margin-top">
        <ion-label>Click the handle above to advance to the next breakpoint.</ion-label>
      </div>
    </ion-content>
  </ion-modal>
</ion-content>

<script>
  var modal = document.querySelector('ion-modal');

  modal.breakpoints = [0, 0.25, 0.5, 0.75];
</script>
```
