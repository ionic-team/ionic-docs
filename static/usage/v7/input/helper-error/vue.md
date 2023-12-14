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

<script lang="ts" setup>
  import { IonInput } from '@ionic/vue';
  import { ref } from 'vue';

  const input = ref(null);

  function validateEmail(email) {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  }

  function validate(ev) {
    const value = ev.target.value;

    input.value.$el.classList.remove('ion-valid');
    input.value.$el.classList.remove('ion-invalid');

    if (value === '') return;

    validateEmail(value) ? input.value.$el.classList.add('ion-valid') : input.value.$el.classList.add('ion-invalid');
  }

  function markTouched() {
    input.value.$el.classList.add('ion-touched');
  }
</script>
```
