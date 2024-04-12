```html
<template>
  <ion-button>Default</ion-button>
  <ion-button shape="round">Round</ion-button>
  <ion-button>
    <ion-icon slot="icon-only" :icon="heart"></ion-icon>
  </ion-button>
  <ion-button shape="round">
    <ion-icon slot="icon-only" :icon="heart"></ion-icon>
  </ion-button>
</template>

<script lang="ts">
  import { IonButton, IonIcon } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { heart } from 'ionicons/icons';

  export default defineComponent({
    components: { IonButton, IonIcon },
    setup() {
      return { heart };
    },
  });
</script>
```
