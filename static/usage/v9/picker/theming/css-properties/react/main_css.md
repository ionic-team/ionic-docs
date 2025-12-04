```css
ion-picker {
  --highlight-background: var(--ion-color-dark);
  --highlight-border-radius: 50px;

  --fade-background-rgb: var(--ion-color-light-rgb);
}

ion-picker-column-option {
  text-transform: uppercase;
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
}

ion-picker-column-option[value='red'] {
  background-image: linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%);
}
ion-picker-column-option[value='blue'] {
  background-image: linear-gradient(-225deg, #2cd8d5 0%, #c5c1ff 56%, #ffbac3 100%);
}
ion-picker-column-option[value='green'] {
  background-image: linear-gradient(-225deg, #11998e 0%, #38ef7d 48%, #40e0d0 100%);
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
```
