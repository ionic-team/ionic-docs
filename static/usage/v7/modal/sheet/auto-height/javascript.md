```html
<style>
  .block {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ion-modal {
    --height: auto;
  }
</style>

<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">Open Sheet Modal</ion-button>

  <ion-modal trigger="open-modal">
    <div class="block">Block of Content</div>
  </ion-modal>
</ion-content>

<script>
  var modal = document.querySelector('ion-modal');

  modal.initialBreakpoint = 1;
  modal.breakpoints = [0, 1];
</script>
```
