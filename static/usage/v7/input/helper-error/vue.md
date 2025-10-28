```html
<template>
  <ion-input
    ref="input"
    type="email"
    fill="solid"
    label="Email"
    label-placement="floating"
    helper-text="Enter a valid email"
    error-text="Invalid email"
    @ionInput="validate"
    @ionBlur="markTouched"
  ></ion-input>
</template>

<script setup lang="ts">
  import { IonInput } from '@ionic/vue';
  import { ref } from 'vue';

  const input = ref();

  const validateEmail = (email) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validate = (event) => {
    const value = event.target.value;

    input.value.$el.classList.remove('ion-valid');
    input.value.$el.classList.remove('ion-invalid');

    if (value === '') return;

    validateEmail(value) ? input.value.$el.classList.add('ion-valid') : input.value.$el.classList.add('ion-invalid');
  };

  const markTouched = () => {
    input.value.$el.classList.add('ion-touched');
  };
</script>
```
