```html
<template>
  <ion-input-otp separators="1,3"> Didn't get a code? <a href="#">Resend the code</a> </ion-input-otp>
  <ion-input-otp separators="2"> Didn't get a code? <a href="#">Resend the code</a> </ion-input-otp>
  <ion-input-otp separators="all"> Didn't get a code? <a href="#">Resend the code</a> </ion-input-otp>
</template>

<script setup lang="ts">
  import { IonInputOtp } from '@ionic/vue';
</script>
```
