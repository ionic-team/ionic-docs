```html
<ion-toolbar>
  <ion-buttons slot="start">
    <ion-button>
      Start
    </ion-button>
  </ion-buttons>
  <ion-title>Start / End Buttons</ion-title>
  <ion-buttons slot="end">
    <ion-button>
      End
    </ion-button>
  </ion-buttons>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="secondary">
    <ion-button>
      Secondary
    </ion-button>
  </ion-buttons>
  <ion-buttons slot="primary">
    <ion-button>
      Primary
    </ion-button>
  </ion-buttons>
  <ion-title>Primary / Secondary Buttons</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="secondary">
    <ion-button>
      <ion-icon slot="icon-only" name="person-circle"></ion-icon>
    </ion-button>
    <ion-button>
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-buttons slot="primary">
    <ion-button>
      <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>Icon Buttons</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="secondary">
    <ion-button fill="solid">
      <ion-icon slot="start" name="person-circle"></ion-icon>
      Contact
    </ion-button>
  </ion-buttons>
  <ion-buttons slot="primary">
    <ion-button fill="solid">
      Help
      <ion-icon slot="end" name="help-circle"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>Solid Buttons</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="secondary">
    <ion-button fill="outline">
      <ion-icon slot="start" name="star"></ion-icon>
      Star
    </ion-button>
  </ion-buttons>
  <ion-buttons slot="primary">
    <ion-button fill="outline">
      Edit
      <ion-icon slot="end" name="create"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>Outline Buttons</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="start">
    <ion-back-button default-href="#"></ion-back-button>
  </ion-buttons>
  <ion-title>Back Button</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="start">
    <ion-menu-button auto-hide="false"></ion-menu-button>
  </ion-buttons>
  <ion-title>Menu Button</ion-title>
</ion-toolbar>
```
