```html
<template>
  <ion-button size="small">
    <ion-icon slot="icon-only" :ios="logoApple" :md="settingsSharp"></ion-icon>
  </ion-button>

  <ion-button>
    <ion-icon slot="icon-only" :ios="logoApple" :md="settingsSharp"></ion-icon>
  </ion-button>

  <ion-button size="large">
    <ion-icon slot="icon-only" :ios="logoApple" :md="settingsSharp"></ion-icon>
  </ion-button>

  <ion-button size="small">
    <ion-icon slot="start" :icon="star"></ion-icon>
    Left Icon
  </ion-button>

  <ion-button>
    <ion-icon slot="start" :icon="star"></ion-icon>
    Left Icon
  </ion-button>

  <ion-button size="large">
    <ion-icon slot="start" :icon="star"></ion-icon>
    Left Icon
  </ion-button>

  <ion-button size="small">
    Right Icon
    <ion-icon slot="end" :icon="heart"></ion-icon>
  </ion-button>

  <ion-button>
    Right Icon
    <ion-icon slot="end" :icon="heart"></ion-icon>
  </ion-button>

  <ion-button size="large">
    Right Icon
    <ion-icon slot="end" :icon="heart"></ion-icon>
  </ion-button>
</template>

<script lang="ts">
  import { IonButton, IonIcon } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { heart, logoApple, settingsSharp, star } from 'ionicons/icons';

  export default defineComponent({
    components: { IonButton, IonIcon },
    setup() {
      return { heart, logoApple, settingsSharp, star };
    },
  });
</script>
```
