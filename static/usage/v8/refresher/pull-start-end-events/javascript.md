```html
<ion-header>
  <ion-toolbar>
    <ion-title>Pull to Refresh</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-refresher id="refresher" slot="fixed">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <p>Pull this content down to trigger the refresh.</p>

  <ion-list lines="full">
    <ion-item>
      <ion-checkbox slot="start"></ion-checkbox>
      <ion-label>Finalize Q1 budget proposal</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox slot="start" checked></ion-checkbox>
      <ion-label>Review design mockups</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox slot="start" checked></ion-checkbox>
      <ion-label>Sync with engineering on API docs</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox slot="start"></ion-checkbox>
      <ion-label>Approve PTO requests for March</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox slot="start"></ion-checkbox>
      <ion-label>Draft monthly newsletter</ion-label>
    </ion-item>
  </ion-list>
</ion-content>

<script>
  const refresher = document.getElementById('refresher');
  const checkboxes = document.querySelectorAll('ion-checkbox');

  refresher.addEventListener('ionPullStart', () => {
    console.log('Pull started');
    // Disable the checkboxes when the pull starts
    checkboxes.forEach((checkbox) => {
      checkbox.disabled = true;
    });
  });

  refresher.addEventListener('ionRefresh', () => {
    setTimeout(() => {
      // Any calls to load data go here
      refresher.complete();
      console.log('Refresh completed');
    }, 2000);
  });

  refresher.addEventListener('ionPullEnd', (event) => {
    console.log('Pull ended with reason: "' + event.detail.reason + '"');
    // Enable the checkboxes when the pull ends
    checkboxes.forEach((checkbox) => {
      checkbox.disabled = false;
    });
  });
</script>
```
