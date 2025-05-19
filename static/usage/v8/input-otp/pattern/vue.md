```html
<template>
  <ion-input-otp pattern="[1-4]"> Numbers 1-4 only </ion-input-otp>
  <ion-input-otp type="text" pattern="[A-Za-z]"> Letters only </ion-input-otp>
  <ion-input-otp type="text" pattern="[D-L]" autocapitalize="on"> Letters D-L only </ion-input-otp>
</template>

<script setup lang="ts">
  import { IonInputOtp } from '@ionic/vue';
</script>
```
