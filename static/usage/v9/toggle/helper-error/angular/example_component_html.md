```html
<form [formGroup]="myForm">
  <ion-toggle
    formControlName="wifi"
    helperText="Enable to connect to available networks"
    errorText="Must be enabled to access the internet"
    justify="space-between"
    (ionChange)="onChange()"
  >
    Wi-Fi
  </ion-toggle>
</form>
```
