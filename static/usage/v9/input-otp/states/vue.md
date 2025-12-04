```html
<template>
  <ion-input-otp disabled value="1234"> Disabled </ion-input-otp>
  <ion-input-otp readonly value="1234"> Readonly </ion-input-otp>

  <ion-input-otp
    v-for="(input, index) in inputs"
    :key="index"
    :value="input.value"
    class="ion-touched has-focus"
    :class="[getInputClasses(input.value)]"
    @ionInput="(e) => input.value = e.target.value"
  >
    <span>{{ getValidationMessage(input.value) }}</span>
  </ion-input-otp>
</template>

<script setup lang="ts">
  import { IonInputOtp } from '@ionic/vue';
  import { ref } from 'vue';

  const inputs = ref([{ value: '12' }, { value: '1234' }]);

  const getInputClasses = (value: string) => ({
    'ion-valid': value.length === 4,
    'ion-invalid': value.length < 4,
  });

  const getValidationMessage = (value: string) => (value.length === 4 ? 'Valid' : 'Invalid');
</script>
```
