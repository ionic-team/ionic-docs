```html
<ion-header>
  <ion-toolbar>
    <ion-title>Pull to Refresh</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-refresher id="refresher" slot="fixed" pull-factor="0.5" pull-min="100" pull-max="200">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <p>Pull this content down to trigger the refresh.</p>
</ion-content>

<script>
  const refresher = document.getElementById('refresher');

  refresher.addEventListener('ionRefresh', () => {
    setTimeout(() => {
      // Any calls to load data go here
      refresher.complete();
    }, 2000);
  });
</script>
```
