```html
<template>
  <ion-page>
    <ion-router-outlet></ion-router-outlet>
    <ion-list>
      <ion-item>
        <ion-input autofocus placeholder="with `autofocus`"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input ref="input" placeholder="using `.setFocus()`"></ion-input>
      </ion-item>
    </ion-list>
  </ion-page>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonList, IonPage, IonRouterOutlet, onIonViewDidEnter } from '@ionic/vue';
  import { ref } from 'vue';

  export default {
    components: { IonInput, IonItem, IonList, IonPage, IonRouterOutlet },
    setup() {
      const input = ref();
      onIonViewDidEnter(() => {
        input.value.$el.setFocus();
      });
      return { input };
    },
  };
</script>
```
