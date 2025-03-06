```html
<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
  <ion-checkbox formControlName="agree" helperText="This needs to be checked" errorText="This field is required">
    I agree to the terms and conditions
  </ion-checkbox>

  <br />

  <ion-button type="submit" size="small">Submit</ion-button>
</form>
```
