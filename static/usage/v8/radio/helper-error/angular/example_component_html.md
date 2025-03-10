```html
<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
  <ion-radio-group
    formControlName="favFruit"
    helperText="Select your favorite fruit"
    errorText="This field is required"
  >
    <ion-radio value="grapes">Grapes</ion-radio><br />
    <ion-radio value="strawberries">Strawberries</ion-radio><br />
    <ion-radio value="pineapple">Pineapple</ion-radio><br />
    <ion-radio value="cherries">Cherries</ion-radio>
  </ion-radio-group>

  <br />

  <ion-button type="submit" size="small">Submit</ion-button>
</form>
```
