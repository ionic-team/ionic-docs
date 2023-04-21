```html
<template>
  <ion-toolbar>
    <ion-title>Default Toolbar</ion-title>
  </ion-toolbar>
  <ion-toolbar color="primary">
    <ion-title>Primary Toolbar</ion-title>
  </ion-toolbar>
  <ion-toolbar color="secondary">
    <ion-title>Secondary Toolbar</ion-title>
  </ion-toolbar>
  <ion-toolbar color="tertiary">
    <ion-title>Tertiary Toolbar</ion-title>
  </ion-toolbar>
  <ion-toolbar color="success">
    <ion-title>Success Toolbar</ion-title>
  </ion-toolbar>
  <ion-toolbar color="warning">
    <ion-title>Warning Toolbar</ion-title>
  </ion-toolbar>
  <ion-toolbar color="danger">
    <ion-title>Danger Toolbar</ion-title>
  </ion-toolbar>
  <ion-toolbar color="light">
    <ion-title>Light Toolbar</ion-title>
  </ion-toolbar>
  <ion-toolbar color="medium">
    <ion-title>Medium Toolbar</ion-title>
  </ion-toolbar>
  <ion-toolbar color="dark">
    <ion-title>Dark Toolbar</ion-title>
  </ion-toolbar>
</template>

<script lang="ts">
  import { IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonTitle, IonToolbar },
  });
</script>
```
