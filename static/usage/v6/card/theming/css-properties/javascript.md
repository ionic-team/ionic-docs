```html
<ion-card>
  <ion-card-header>
    <ion-card-title>Card Title</ion-card-title>
    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>
    Here's a small text description for the card content. Nothing more, nothing less.
  </ion-card-content>
</ion-card>

<style>
  ion-card {
    --background: #000;
    --color: #9efff0;
  }

  ion-card-title {
    --color: #52ffe4;
  }

  ion-card-subtitle {
    --color: #d1fff8;
  }

  /* iOS places the subtitle above the title */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>
```
