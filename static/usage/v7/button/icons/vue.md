```html
<template>
  <ion-button>
    <ion-icon slot="start" :icon="star"></ion-icon>
    Left Icon
  </ion-button>

  <ion-button>
    Right Icon
    <ion-icon slot="end" :icon="star"></ion-icon>
  </ion-button>

  <ion-button>
    <ion-icon slot="icon-only" :icon="star"></ion-icon>
  </ion-button>
</template>

<script lang="ts">
  import { IonButton, IonIcon } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { star } from 'ionicons/icons';

  export default defineComponent({
    components: { IonButton, IonIcon },
    setup() {
      return { star }
    }
  });
</script>
```
