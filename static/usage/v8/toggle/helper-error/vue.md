```html
<template>
  <ion-toggle
    v-model="wifi"
    helper-text="Enable to connect to available networks"
    error-text="Must be enabled to access the internet"
    justify="space-between"
    @ionChange="validateToggle"
    :class="{
      'ion-valid': isValid,
      'ion-invalid': isValid === false,
      'ion-touched': isTouched,
    }"
  >
    Wi-Fi
  </ion-toggle>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { IonToggle, IonButton, ToggleCustomEvent } from '@ionic/vue';

  const wifi = ref(true);
  const isTouched = ref(false);
  const isValid = ref<boolean | undefined>();

  const validateToggle = (event: ToggleCustomEvent<{ checked: boolean }>) => {
    isTouched.value = true;
    isValid.value = event.detail.checked;
  };
</script>
```
