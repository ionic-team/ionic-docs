```html
<ion-card>
  <ion-card-header>
    <ion-card-title>Card Title</ion-card-title>
    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
  </ion-card-header>
  <ion-card-content>
    <ion-list>
      <ion-item>
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
      </ion-item>

      <ion-item lines="none">
        <ion-thumbnail slot="start">
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>Item</ion-label>
      </ion-item>
    </ion-list>
  </ion-card-content>
</ion-card>

<style>
  ion-item {
    --padding-start: 0;
  }

  /* iOS places the subtitle above the title */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>
```
