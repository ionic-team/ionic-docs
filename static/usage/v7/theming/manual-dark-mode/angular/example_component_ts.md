```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent implements OnInit {
  themeToggle = false;

  // Called when the app loads
  ngOnInit() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    this.prefersDarkCheck(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => this.prefersDarkCheck(mediaQuery.matches));
  }

  prefersDarkCheck(matches) {
    this.themeToggle = matches;
    this.toggleDarkTheme(matches);
  }

  toggleChange(ev) {
    this.toggleDarkTheme(ev.detail.checked);
  }

  // Add or remove the "dark" class based on shouldAdd
  toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
  }
}
```
