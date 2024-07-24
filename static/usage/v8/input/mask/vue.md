```html
<template>
  <ion-list>
    <ion-item>
      <ion-input label="Card number" placeholder="0000 0000 0000 0000" v-maskito="cardOptions"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input
        label="US phone number"
        placeholder="+1 (xxx) xxx-xxxx"
        v-model="myPhoneNumber"
        v-maskito="phoneOptions"
      ></ion-input>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { IonInput, IonItem, IonList } from '@ionic/vue';
  import { maskito as vMaskito } from '@maskito/vue';
  import { maskitoTransform } from '@maskito/core';

  const cardOptions = {
    mask: [
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(3).fill(/\d/),
    ],
    elementPredicate: (el: HTMLIonInputElement) => {
      return new Promise((resolve) => {
        requestAnimationFrame(async () => {
          const input = await el.getInputElement();
          resolve(input);
        });
      });
    },
  };

  const phoneOptions = {
    mask: ['+', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    elementPredicate: (el: HTMLIonInputElement) => {
      return new Promise((resolve) => {
        requestAnimationFrame(async () => {
          const input = await el.getInputElement();
          resolve(input);
        });
      });
    },
  };
  // If you need to set an initial value, you can use maskitoTransform to ensure the value is valid
  const myPhoneNumber = ref(maskitoTransform('5555551212', phoneOptions));
</script>
```
