```html
<ion-header class="ion-no-border">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button default-href="#"></ion-back-button>
    </ion-buttons>
    <ion-title>Display</ion-title>
    <ion-buttons slot="end">
      <ion-button color="dark">
        <ion-icon slot="icon-only" ios="person-circle-outline" md="person-circle"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list-header>Appearance</ion-list-header>
  <ion-list inset="true">
    <ion-item>
      <ion-toggle id="themeToggle" justify="space-between">Dark Mode</ion-toggle>
    </ion-item>
  </ion-list>

  <ion-list inset="true">
    <ion-item button="true">Text Size</ion-item>
    <ion-item>
      <ion-toggle justify="space-between">Bold Text</ion-toggle>
    </ion-item>
  </ion-list>

  <ion-list-header>Brightness</ion-list-header>
  <ion-list inset="true">
    <ion-item>
      <ion-range value="40">
        <ion-icon name="sunny-outline" slot="start"></ion-icon>
        <ion-icon name="sunny" slot="end"></ion-icon>
      </ion-range>
    </ion-item>
    <ion-item>
      <ion-toggle justify="space-between" checked>True Tone</ion-toggle>
    </ion-item>
  </ion-list>

  <ion-list inset="true">
    <ion-item button="true">
      <ion-label>Night Shift</ion-label>
      <ion-text slot="end" color="medium">9:00 PM to 8:00 AM</ion-text>
    </ion-item>
  </ion-list>
</ion-content>

<script>
  // Query for the toggle that is used to change between themes
  const toggle = document.querySelector('#themeToggle');

  // Listen for the toggle check/uncheck to toggle the dark theme
  toggle.addEventListener('ionChange', (ev) => {
    toggleDarkTheme(ev.detail.checked);
  });

  // Use matchMedia to check the user preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  // Initialize the dark theme based on the initial
  // value of the prefers-color-scheme media query
  initializeDarkTheme(prefersDark.matches);

  // Listen for changes to the prefers-color-scheme media query
  prefersDark.addEventListener('change', (mediaQuery) => initializeDarkTheme(mediaQuery.matches));

  // Check/uncheck the toggle and update the theme based on isDark
  function initializeDarkTheme(isDark) {
    toggle.checked = isDark;
    toggleDarkTheme(isDark);
  }

  // Called by the media query to check/uncheck the toggle
  function checkToggle(shouldCheck) {
    toggle.checked = shouldCheck;
  }

  // Add or remove the "dark" class on the document body
  function toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
  }
</script>

<style>
  /*
   * Optional CSS
   * -----------------------------------
   */

  /* This sets a different background and item background in light mode on ios */
  .ios body {
    --ion-background-color: #f2f2f6;
    --ion-toolbar-background: var(--ion-background-color);
    --ion-item-background: #fff;
  }

  /* This sets a different background and item background in light mode on md */
  .md body {
    --ion-background-color: #f9f9f9;
    --ion-toolbar-background: var(--ion-background-color);
    --ion-item-background: #fff;
  }

  /* This is added for the flashing that happens when toggling between themes */
  ion-item {
    --transition: none;
  }
</style>
```
