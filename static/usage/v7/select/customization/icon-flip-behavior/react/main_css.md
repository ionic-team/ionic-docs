```css
ion-select.always-flip::part(icon) {
  transition: transform .15s cubic-bezier(.4, 0, .2, 1);
}

ion-select.always-flip.select-expanded::part(icon) {
  transform: rotate(180deg);
}

ion-select.never-flip::part(icon) {
  transform: none;
}
```
