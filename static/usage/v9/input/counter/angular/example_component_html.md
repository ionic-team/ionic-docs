```html
<ion-input label="Default counter" labelPlacement="floating" [counter]="true" maxlength="20"></ion-input>

<ion-input
  id="custom-input"
  label="Custom Counter Format"
  labelPlacement="floating"
  [counter]="true"
  maxlength="20"
  [counterFormatter]="customCounterFormatter"
></ion-input>
```
