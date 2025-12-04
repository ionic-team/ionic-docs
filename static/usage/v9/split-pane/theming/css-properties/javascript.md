```html
<ion-split-pane when="xs" content-id="main">
  <ion-menu content-id="main">
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> Menu Content is 350px wide and has a blue dashed border </ion-content>
  </ion-menu>

  <div class="ion-page" id="main">
    <ion-header>
      <ion-toolbar>
        <ion-title>Main View</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> Main View Content </ion-content>
  </div>
</ion-split-pane>

<style>
  ion-split-pane {
    --side-width: 350px;
    --side-max-width: 350px;

    --border: 1px dashed #b3baff;
  }
</style>
```
