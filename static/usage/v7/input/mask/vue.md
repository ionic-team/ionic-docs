```html
<template>
  <ion-list>
    <ion-item>
      <ion-input label="Card number" placeholder="0000 0000 0000 0000" v-maskito="cardOptions"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input label="US phone number" placeholder="+1 (xxx) xxx-xxxx" v-maskito="phoneOptions"></ion-input>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonInput, IonItem, IonList } from '@ionic/vue';
  import { maskito as vMaskito } from '@maskito/vue';

  const cardOptions = {
    mask: [
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
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
</script>
```
