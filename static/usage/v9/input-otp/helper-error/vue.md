```html
<template>
  <ion-input-otp
    ref="inputOtp"
    helper-text="Enter the code sent to your email"
    error-text="Enter all 4 digits"
    @ionInput="validate"
    @ionBlur="markTouched"
  ></ion-input-otp>
</template>

<script setup lang="ts">
  import { IonInputOtp } from '@ionic/vue';
  import { ref } from 'vue';

  const inputOtp = ref();

  const validate = (event) => {
    const value = event.detail.value ?? '';

    inputOtp.value.$el.classList.remove('ion-valid');
    inputOtp.value.$el.classList.remove('ion-invalid');

    value.length === 4
      ? inputOtp.value.$el.classList.add('ion-valid')
      : inputOtp.value.$el.classList.add('ion-invalid');
  };

  const markTouched = () => {
    inputOtp.value.$el.classList.add('ion-touched');
  };
</script>
```
