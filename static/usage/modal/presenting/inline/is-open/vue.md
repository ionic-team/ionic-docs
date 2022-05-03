```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Inline Modal</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-modal :is-open="true">
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding"> This is an example of an inline full-height modal. </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script>
  import { IonButton, IonModal, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton, IonModal, IonHeader, IonToolbar, IonTitle },
  });
</script>
```
