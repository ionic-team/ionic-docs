```ts
import { Component, OnInit, signal } from '@angular/core';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRange,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { personCircle, personCircleOutline, sunny, sunnyOutline } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonRange,
    IonText,
    IonTitle,
    IonToggle,
    IonToolbar,
  ],
})
export class ExampleComponent implements OnInit {
  // Signals so the palette state set from the matchMedia listeners (which fire
  // outside Angular) re-renders the toggles on its own, with no manual change detection.
  readonly darkPaletteToggle = signal(false);
  readonly highContrastPaletteToggle = signal(false);

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
  initializeDarkPalette(isDark: boolean) {
    this.darkPaletteToggle.set(isDark);
    this.toggleDarkPalette(isDark);
  }

  // Check/uncheck the toggle and update the palette based on isHighContrast
  initializeHighContrastPalette(isHighContrast: boolean) {
    this.highContrastPaletteToggle.set(isHighContrast);
    this.toggleHighContrastPalette(isHighContrast);
  }

  // Listen for the toggle check/uncheck to toggle the dark palette
  darkPaletteToggleChange(event: CustomEvent) {
    this.initializeDarkPalette(event.detail.checked);
  }

  // Listen for the toggle check/uncheck to toggle the high contrast palette
  highContrastPaletteToggleChange(event: CustomEvent) {
    this.initializeHighContrastPalette(event.detail.checked);
  }

  // Add or remove the "ion-palette-dark" class on the html element
  toggleDarkPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }

  // Add or remove the "ion-palette-high-contrast" class on the html element
  toggleHighContrastPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-high-contrast', shouldAdd);
  }
}
```
