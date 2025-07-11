```css
ion-radio {
  --border-radius: 50%;
  --color: #ddd;
  --color-checked: #6815ec;
}

ion-radio.ios::part(container) {
  width: 20px;
  height: 20px;

  border: 2px solid #ddd;
  border-radius: 50%;
}

.radio-checked.ios::part(container) {
  border-color: #6815ec;
}
```
