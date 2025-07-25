```html
<router-outlet></router-outlet>
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button routerLink="home" routerLinkActive="tab-selected">
      <ion-icon name="play-circle"></ion-icon>
      Listen Now
    </ion-tab-button>
    <ion-tab-button routerLink="radio" routerLinkActive="tab-selected">
      <ion-icon name="radio"></ion-icon>
      Radio
    </ion-tab-button>
    <ion-tab-button routerLink="library" routerLinkActive="tab-selected">
      <ion-icon name="library"></ion-icon>
      Library
    </ion-tab-button>
    <ion-tab-button routerLink="search" routerLinkActive="tab-selected">
      <ion-icon name="search"></ion-icon>
      Search
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```
