```html
<template>
  <ion-page>
    <ion-router-outlet></ion-router-outlet>
    <ion-list>
      <ion-item>
        <ion-input :autofocus="true" label="Autofocus" label-placement="floating"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input ref="input" label="setFocus" labelPlacement="floating"></ion-input>
      </ion-item>
    </ion-list>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonInput, IonItem, IonList, IonPage, IonRouterOutlet, onIonViewDidEnter } from '@ionic/vue';
  import { ref } from 'vue';

  const input = ref();
  onIonViewDidEnter(() => {
    requestAnimationFrame(() => {
      // requestAnimationFrame is currently required due to:
      // https://github.com/ionic-team/ionic-framework/issues/24434
      input.value.$el.setFocus();
    });
  });
</script>
```
