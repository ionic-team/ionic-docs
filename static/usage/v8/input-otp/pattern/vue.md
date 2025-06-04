```html
<template>
  <ion-input-otp pattern="[1-4]" value="123"> Numbers 1-4 only </ion-input-otp>
  <ion-input-otp type="text" pattern="." value="!@#"> All characters allowed </ion-input-otp>
  <ion-input-otp type="text" pattern="[A-Z]" autocapitalize="on" value="ABC">
    Capital Latin letters only
  </ion-input-otp>
  <ion-input-otp type="text" pattern="[\p{Script=Greek}]" value="αβγ"> Greek characters only </ion-input-otp>
  <ion-input-otp type="text" pattern="[\p{Script=Arabic}]" value="ابت"> Arabic characters only </ion-input-otp>
  <ion-input-otp type="text" pattern="[\p{Script=Han}]" value="甲乙丙"> Chinese characters only </ion-input-otp>
</template>

<script setup lang="ts">
  import { IonInputOtp } from '@ionic/vue';
</script>
```
