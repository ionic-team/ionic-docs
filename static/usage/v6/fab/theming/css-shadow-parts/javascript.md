```html
<style>
  ion-fab-button::part(native) {
    background-color: #b7f399;
    border-radius: 15px;
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,.3), 0px 1px 3px 1px rgba(0,0,0,.15);
    color: black;
  }
    
  ion-fab-button::part(native):hover::after {
    background-color: #a3e681;
  }

  ion-fab-button::part(native):active::after {
    background-color: #87d361;
  }
</style>

<ion-fab>
  <ion-fab-button>
    <ion-icon name="add"></ion-icon>
  </ion-fab-button>
  <ion-fab-list side="end">
    <ion-fab-button>
      <ion-icon name="document"></ion-icon>
    </ion-fab-button>
    <ion-fab-button>
      <ion-icon name="color-palette"></ion-icon>
    </ion-fab-button>
    <ion-fab-button>
      <ion-icon name="globe"></ion-icon>
    </ion-fab-button>
  </ion-fab-list>
</ion-fab>
```
