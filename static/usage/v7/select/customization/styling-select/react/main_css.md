```css
ion-select {
  --placeholder-color: #971e49;
  --placeholder-opacity: 1;
  width: 100%;
  justify-content: center;
}

ion-select::part(placeholder),
ion-select::part(text) {
  flex: 0 0 auto;
}

ion-select::part(placeholder)::first-letter {
  font-size: 24px;
  font-weight: 500;
}

ion-select::part(text) {
  color: #545ca7;
}

ion-select::part(icon) {
  color: #971e49;
  opacity: 1;
}
```