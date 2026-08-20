```html
<ion-menu menu-id="first-menu" content-id="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>First Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">This is the first menu content.</ion-content>
</ion-menu>

<ion-menu menu-id="second-menu" content-id="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>Second Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">This is the second menu content.</ion-content>
</ion-menu>

<ion-menu side="end" content-id="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>End Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">This is the end menu content.</ion-content>
</ion-menu>

<div class="ion-page" id="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <p>Tap a button below to open a specific menu.</p>

    <ion-button expand="block" onclick="openFirstMenu()">Open First Menu</ion-button>
    <ion-button expand="block" onclick="openSecondMenu()">Open Second Menu</ion-button>
    <ion-button expand="block" onclick="openEndMenu()">Open End Menu</ion-button>
  </ion-content>
</div>

<script>
  async function openFirstMenu() {
    /**
     * Open the menu by menu-id
     * We refer to the menu using an ID
     * because multiple "start" menus exist.
     */
    await menuController.open('first-menu');
  }

  async function openSecondMenu() {
    /**
     * Open the menu by menu-id
     * We refer to the menu using an ID
     * because multiple "start" menus exist.
     */
    await menuController.open('second-menu');
  }

  async function openEndMenu() {
    /**
     * Open the menu by side
     * We can refer to the menu by side
     * here because only one "end" menu exists
     */
    await menuController.open('end');
  }
</script>
```
