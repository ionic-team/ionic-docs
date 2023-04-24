```html
<ion-header>
  <ion-toolbar>
    <ion-title>Fab Buttons</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-fab slot="fixed" vertical="top" horizontal="start">
    <ion-fab-button>
      <ion-icon name="chevron-forward-circle"></ion-icon>
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

  <ion-fab slot="fixed" vertical="top" horizontal="end" edge="true">
    <ion-fab-button>
      <ion-icon name="chevron-down-circle"></ion-icon>
    </ion-fab-button>
    <ion-fab-list side="bottom">
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
      
  <ion-fab slot="fixed" vertical="bottom" horizontal="end">
    <ion-fab-button>
      <ion-icon name="chevron-up-circle"></ion-icon>
    </ion-fab-button>
    <ion-fab-list side="top">
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
</ion-content>
```
