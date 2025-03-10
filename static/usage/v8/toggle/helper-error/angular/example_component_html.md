```html
<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
  <ion-toggle formControlName="wifi" helperText="This needs to be enabled" errorText="This field is required">
    Wi-Fi
  </ion-toggle>

  <br />

  <ion-button type="submit" size="small">Submit</ion-button>
</form>
```
