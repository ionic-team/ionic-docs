```html
<ion-textarea label="Default counter" labelPlacement="floating" [counter]="true" maxlength="20"></ion-textarea>

<ion-textarea
  label="Custom Counter Format"
  labelPlacement="floating"
  [counter]="true"
  maxlength="20"
  [counterFormatter]="customCounterFormatter"
></ion-textarea>
```
