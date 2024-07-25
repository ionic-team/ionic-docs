```ts
import { Component, OnInit } from '@angular/core';

import { addIcons } from 'ionicons';
import { personCircle, personCircleOutline, sunny, sunnyOutline } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent implements OnInit {
  darkPaletteToggle = false;
  highContrastPaletteToggle = false;

  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ personCircle, personCircleOutline, sunny, sunnyOutline });
  }

  ngOnInit() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersHighContrast = window.matchMedia('(prefers-contrast: more)');

    // Initialize the dark and high contrast palettes based on the initial
    // value of the media queries
    this.initializeDarkPalette(prefersDark.matches);
    this.initializeHighContrastPalette(prefersHighContrast.matches);

    // Listen for changes to the media queries
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkPalette(mediaQuery.matches));
    prefersHighContrast.addEventListener('change', (mediaQuery) =>
      this.initializeHighContrastPalette(mediaQuery.matches)
    );
  }

  // Check/uncheck the toggle and update the palette based on isDark
  initializeDarkPalette(isDark) {
    this.darkPaletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  // Check/uncheck the toggle and update the palette based on isHighContrast
  initializeHighContrastPalette(isHighContrast) {
    this.highContrastPaletteToggle = isHighContrast;
    this.toggleHighContrastPalette(isHighContrast);
  }

  // Listen for the toggle check/uncheck to toggle the dark palette
  darkPaletteToggleChange(ev) {
    this.toggleDarkPalette(ev.detail.checked);
  }

  // Listen for the toggle check/uncheck to toggle the high contrast palette
  highContrastPaletteToggleChange(ev) {
    this.toggleHighContrastPalette(ev.detail.checked);
  }

  // Add or remove the "ion-palette-dark" class on the html element
  toggleDarkPalette(shouldAdd) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }

  // Add or remove the "ion-palette-high-contrast" class on the html element
  toggleHighContrastPalette(shouldAdd) {
    document.documentElement.classList.toggle('ion-palette-high-contrast', shouldAdd);
  }
}
```
