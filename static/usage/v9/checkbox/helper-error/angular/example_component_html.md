```html
<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
  <ion-checkbox
    formControlName="agree"
    helperText="Agree to the terms before continuing"
    errorText="You must agree to the terms to continue"
  >
    I agree to the terms and conditions
  </ion-checkbox>

  <br />

  <ion-button type="submit" size="small">Submit</ion-button>
</form>
```
