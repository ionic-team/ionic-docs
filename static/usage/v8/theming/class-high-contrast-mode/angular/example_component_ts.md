```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent implements OnInit {
  darkThemeToggle = false;
  highContrastThemeToggle = false;

  ngOnInit() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersHighContrast = window.matchMedia('(prefers-contrast: more)');

    // Initialize the dark and high contrast themes based on the initial
    // value of the media queries
    this.initializeDarkTheme(prefersDark.matches);
    this.initializeHighContrastTheme(prefersHighContrast.matches);

    // Listen for changes to the media queries
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkTheme(mediaQuery.matches));
    prefersHighContrast.addEventListener('change', (mediaQuery) =>
      this.initializeHighContrastTheme(mediaQuery.matches)
    );
  }

  // Check/uncheck the toggle and update the theme based on isDark
  initializeDarkTheme(isDark) {
    this.darkThemeToggle = isDark;
    this.toggleDarkTheme(isDark);
  }

  // Check/uncheck the toggle and update the theme based on isHighContrast
  initializeHighContrastTheme(isHighContrast) {
    this.highContrastThemeToggle = isHighContrast;
    this.toggleHighContrastTheme(isHighContrast);
  }

  // Listen for the toggle check/uncheck to toggle the dark theme
  darkThemeToggleChange(ev) {
    this.toggleDarkTheme(ev.detail.checked);
  }

  // Listen for the toggle check/uncheck to toggle the high contrast theme
  highContrastThemeToggleChange(ev) {
    this.toggleHighContrastTheme(ev.detail.checked);
  }

  // Add or remove the "ion-theme-dark" class on the html element
  toggleDarkTheme(shouldAdd) {
    document.documentElement.classList.toggle('ion-theme-dark', shouldAdd);
  }

  // Add or remove the "ion-theme-high-contrast" class on the html element
  toggleHighContrastTheme(shouldAdd) {
    document.documentElement.classList.toggle('ion-theme-high-contrast', shouldAdd);
  }
}
```
