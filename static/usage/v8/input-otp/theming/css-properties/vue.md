```html
<template>
  <ion-input-otp class="custom" separators="all"> Didn't get a code? <a href="#">Resend the code</a> </ion-input-otp>
  <ion-input-otp fill="solid" class="custom" separators="all">
    Didn't get a code? <a href="#">Resend the code</a>
  </ion-input-otp>
</template>

<script setup lang="ts">
  import { IonInputOtp } from '@ionic/vue';
  import { defineComponent } from 'vue';
</script>

<style>
  ion-input-otp.custom {
    --separator-color: rgb(90, 23, 237, 0.12);
    --highlight-color-focused: #5a17ed;
  }

  .input-otp-fill-outline.custom {
    --border-color: rgb(90, 23, 237, 0.6);
    --color: #5a17ed;
  }

  .input-otp-fill-solid.custom {
    --border-color: rgb(90, 23, 237, 0.12);
    --background: rgb(90, 23, 237, 0.12);
  }
</style>
```
