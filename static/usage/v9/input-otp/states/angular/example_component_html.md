```html
<ion-input-otp disabled value="1234"> Disabled </ion-input-otp>
<ion-input-otp readonly value="1234"> Readonly </ion-input-otp>
<form [formGroup]="myForm">
  <ion-input-otp formControlName="first">{{ getValidationText('first') }}</ion-input-otp>
  <ion-input-otp formControlName="second" class="has-focus">{{ getValidationText('second') }}</ion-input-otp>
</form>
```
