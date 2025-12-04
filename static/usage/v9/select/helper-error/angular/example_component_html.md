```html
<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
  <ion-select
    formControlName="favFruit"
    label="Favorite fruit"
    placeholder="Select fruit"
    helperText="Select your favorite fruit"
    errorText="This field is required"
  >
    <ion-select-option value="apple">Apple</ion-select-option>
    <ion-select-option value="banana">Banana</ion-select-option>
    <ion-select-option value="orange">Orange</ion-select-option>
  </ion-select>

  <br />

  <ion-button type="submit" size="small">Submit</ion-button>
</form>
```
