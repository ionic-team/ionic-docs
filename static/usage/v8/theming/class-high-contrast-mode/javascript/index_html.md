```html
<ion-header>
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
      <ion-toggle justify="space-between" id="darkPaletteToggle">Dark Mode</ion-toggle>
    </ion-item>
    <ion-item>
      <ion-toggle justify="space-between" id="highContrastPaletteToggle">High Contrast Mode</ion-toggle>
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
  // Query for the toggle that is used to change between palettes
  const darkPaletteToggle = document.querySelector('#darkPaletteToggle');
  const highContrastPaletteToggle = document.querySelector('#highContrastPaletteToggle');

  // Listen for the toggle check/uncheck to toggle the palette
  darkPaletteToggle.addEventListener('ionChange', (ev) => {
    toggleDarkPalette(ev.detail.checked);
  });

  highContrastPaletteToggle.addEventListener('ionChange', (ev) => {
    toggleHighContrastPalette(ev.detail.checked);
  });

  // Use matchMedia to check the user preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersHighContrast = window.matchMedia('(prefers-contrast: more)');

  // Initialize the dark palette based on the initial
  // value of the media queries
  initializeDarkPalette(prefersDark.matches);
  initializeHighContrastPalette(prefersHighContrast.matches);

  // Listen for changes to the media queries
  prefersDark.addEventListener('change', (mediaQuery) => initializeDarkPalette(mediaQuery.matches));
  prefersHighContrast.addEventListener('change', (mediaQuery) => initializeHighContrastPalette(mediaQuery.matches));

  // Check/uncheck the toggle and update the dark palette
  function initializeDarkPalette(isDark) {
    darkPaletteToggle.checked = isDark;
    toggleDarkPalette(isDark);
  }

  // Check/uncheck the toggle and update the high contrast palette
  function initializeHighContrastPalette(isHighContrast) {
    highContrastPaletteToggle.checked = isHighContrast;
    toggleHighContrastPalette(isHighContrast);
  }

  // Add or remove the "ion-palette-dark" class on the html element
  function toggleDarkPalette(shouldAdd) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }

  // Add or remove the "ion-palette-high-contrast" class on the html element
  function toggleHighContrastPalette(shouldAdd) {
    document.documentElement.classList.toggle('ion-palette-high-contrast', shouldAdd);
  }
</script>

<style>
  /* (Optional) This is added to prevent the flashing that happens when toggling between palettes */
  ion-item {
    --transition: none;
  }
</style>
```
