---
hideTOC: true
demoUrl: '/docs/pages/theming/color-generator/index.html'
previousText: 'Advanced Theming'
previousUrl: '/docs/theming/advanced'
nextText: 'Publishing an app'
nextUrl: '/docs/publishing/app-store'
contributors:
  - brandyscarney
  - kevinports
  - ajonp
---

# Color Generator

Create custom color palettes for your app’s UI. Update a color’s hex values, check the demo app on the right to confirm, then copy and paste the generated code directly into your Ionic project.

<color-generator mode="md" no-prerender></color-generator>

## Example JavaScript Usage

```html
  <ion-segment
    class="ion-theme-segment"
    value="default"
    color="dark"
    scrollable
  >
    <ion-segment-button value="default">
      <ion-icon name="logo-ionic"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="dark">
      <ion-icon name="star-half"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="sam-mode">
      <ion-icon name="moon"></ion-icon>
    </ion-segment-button>
  </ion-segment>
```

```js
// PLACE COPIED THEME ARRAY BELOW HERE
/* EXAMPLE
let themes = [
  {
    name: 'default',
    styles: [
      ...
    ]
  }
];
*/



// PLACE COPIED THEME ARRAY ABOVE HERE

// Listen for ionChange on all segments
const segments = document.querySelectorAll('.ion-theme-segment');
for (let i = 0; i < segments.length; i++) {
  segments[i].addEventListener('ionChange', ev => {
    let evTheme = ev.srcElement.value ? ev.srcElement.value : 'default';
    localStorage.setItem('ion-theme', evTheme);
    setTheme(evTheme);
  });
  segments[i].addEventListener('ionStyle', ev => {
    ev.target.value = currentTheme;
    setTheme(currentTheme);
  });
}

//Get current theme
let currentTheme = localStorage.getItem('ion-theme');

document.addEventListener('DOMContentLoaded', e => {
  setTheme(currentTheme);
});

function setTheme(name) {
  if (!name) {
    return;
  }
  const theme = themes.find(theme => theme.name === name);
  theme.styles.forEach(style => {
    document.documentElement.style.setProperty(
      style.themeVariable,
      style.value
    );
  });
}
```