```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Example</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content color="light">
    <ion-list :inset="true">
      <ion-item>
        <ion-input label="First Name"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input label="Last Name"></ion-input>
      </ion-item>
      <ion-item>
        <ion-toggle>
          <ion-label>Allow Notifications</ion-label>
          <ion-note color="medium">Unsubscribe at any time</ion-note>
        </ion-toggle>
      </ion-item>
    </ion-list>

    <ion-list :inset="true">
      <ion-item>
        <ion-textarea label="Comments" label-placement="floating" rows="5"></ion-textarea>
      </ion-item>
    </ion-list>

    <ion-note color="medium" class="ion-margin-horizontal">
      Your comments will be kept anonymous and will only be used to improve the reliability of our products.
    </ion-note>
  </ion-content>
</template>

<script lang="ts">
  import {
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonNote,
    IonTextarea,
    IonToggle,
    IonToolbar,
    IonTitle,
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonContent,
      IonHeader,
      IonInput,
      IonItem,
      IonLabel,
      IonList,
      IonNote,
      IonTextarea,
      IonToggle,
      IonToolbar,
      IonTitle,
    },
  });
</script>

<style scoped>
  ion-note {
    display: block;
  }
</style>
```
