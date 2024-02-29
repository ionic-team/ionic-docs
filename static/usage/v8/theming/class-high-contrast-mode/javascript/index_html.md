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

<ion-content color="light">
  <ion-list-header>Appearance</ion-list-header>
  <ion-list inset="true">
    <ion-item>
      <ion-toggle justify="space-between" id="darkThemeToggle">Dark Mode</ion-toggle>
    </ion-item>
    <ion-item>
      <ion-toggle justify="space-between" id="highContrastThemeToggle">High Contrast Mode</ion-toggle>
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
  const darkThemeToggle = document.querySelector('#darkThemeToggle');
  const highContrastThemeToggle = document.querySelector('#highContrastThemeToggle');

  // Listen for the toggle check/uncheck to toggle the theme
  darkThemeToggle.addEventListener('ionChange', (ev) => {
    toggleDarkTheme(ev.detail.checked);
  });

  highContrastThemeToggle.addEventListener('ionChange', (ev) => {
    toggleHighContrastTheme(ev.detail.checked);
  });

  // Use matchMedia to check the user preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersHighContrast = window.matchMedia('(prefers-contrast: more)');

  // Initialize the dark theme based on the initial
  // value of the media queries
  initializeDarkTheme(prefersDark.matches);
  initializeHighContrastTheme(prefersHighContrast.matches);

  // Listen for changes to the media queries
  prefersDark.addEventListener('change', (mediaQuery) => initializeDarkTheme(mediaQuery.matches));
  prefersHighContrast.addEventListener('change', (mediaQuery) => initializeHighContrastTheme(mediaQuery.matches));

  // Check/uncheck the toggle and update the dark theme
  function initializeDarkTheme(isDark) {
    darkThemeToggle.checked = isDark;
    toggleDarkTheme(isDark);
  }

  // Check/uncheck the toggle and update the high contrast theme
  function initializeHighContrastTheme(isHighContrast) {
    highContrastThemeToggle.checked = isHighContrast;
    toggleHighContrastTheme(isHighContrast);
  }

  // Add or remove the "ion-theme-dark" class on the html element
  function toggleDarkTheme(shouldAdd) {
    document.documentElement.classList.toggle('ion-theme-dark', shouldAdd);
  }

  // Add or remove the "ion-theme-high-contrast" class on the html element
  function toggleHighContrastTheme(shouldAdd) {
    document.documentElement.classList.toggle('ion-theme-high-contrast', shouldAdd);
  }
</script>

<style>
  /* (Optional) This is added to prevent the flashing that happens when toggling between themes */
  ion-item {
    --transition: none;
  }
</style>
```
