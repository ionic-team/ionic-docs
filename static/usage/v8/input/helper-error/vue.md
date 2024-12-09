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
import { ref } from 'vue';
import { IonInput } from '@ionic/vue';

const intput = ref<HTMLElement | null>(null);

function validateEmail(email: string) {
  return email.match(
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  ) !== null;
}

function validate(ev: Event) {
  const target = ev.target as HTMLInputElement;
  const value = target.value;

  if (!intput.value) return;

  const inputElement = intput.value;

  inputElement.classList.remove('ion-valid');
  inputElement.classList.remove('ion-invalid');

  if (value === '') return;

  if (validateEmail(value)) {
    inputElement.classList.add('ion-valid');
  } else {
    inputElement.classList.add('ion-invalid');
  }
}

function markTouched() {
  if (!intput.value) return;
  intput.value.classList.add('ion-touched');
}
</script>
```
