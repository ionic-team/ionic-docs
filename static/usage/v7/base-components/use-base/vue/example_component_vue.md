```html
<template>
  <ion-button>Platform Styles</ion-button>
  <ion-button :use-base="true">Base Components</ion-button>
</template>

<script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
  });
</script>

<style scoped>
  ion-button.base {
    --padding-top: 10px;
    --padding-bottom: 10px;
    --padding-start: 20px;
    --padding-end: 20px;
  
    --border-radius: 12px;
  
    --background-hover: var(--ion-color-tint, var(--ion-color-primary-tint));
    --background-activated: var(--ion-color-shade, var(--ion-color-primary-shade));
    --background-focused: var(--ion-color-shade, var(--ion-color-primary-shade));
  
    --box-shadow: 0px 10px 15px -3px rgba(var(--ion-color-base-rgb, var(--ion-color-primary-rgb)), 0.5);
  
    height: 56px;
    margin: 4px;
  }
</style>
```
