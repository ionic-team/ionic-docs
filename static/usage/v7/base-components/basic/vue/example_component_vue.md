```html
<template>
  <ion-button>Button</ion-button>
  <ion-button color="danger">Button</ion-button>
  <ion-button color="success">Button</ion-button>
</template>

<script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
  });
</script>

<style scoped>
  ion-button {
    margin: 4px;
  
    --border-radius: 12px;
  
    --background-hover: var(--ion-color-tint, var(--ion-color-primary-tint));
    --background-activated: var(--ion-color-shade, var(--ion-color-primary-shade));
    --background-focused: var(--ion-color-shade, var(--ion-color-primary-shade));
  
    --box-shadow: 0px 10px 15px -3px rgba(var(--ion-color-base-rgb, var(--ion-color-primary-rgb)), 0.5);
  }
  
  ion-button::part(native) {
    padding: 10px 20px;
  
    min-height: 56px;
  }
</style>
```
