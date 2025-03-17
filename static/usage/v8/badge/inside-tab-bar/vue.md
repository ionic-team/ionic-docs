```html
<template>
  <ion-tab-bar color="light">
    <ion-tab-button tab="1">
      <ion-icon :icon="heart" />
      <ion-label>Favorites</ion-label>
      <ion-badge color="danger"></ion-badge>
    </ion-tab-button>

    <ion-tab-button tab="2">
      <ion-icon :icon="calendar" />
      <ion-badge color="danger">47</ion-badge>
    </ion-tab-button>
  </ion-tab-bar>
</template>

<script lang="ts">
  import { IonBadge, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/vue';
  import { heart, calendar } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonBadge,
      IonTabBar,
      IonTabButton,
      IonIcon,
      IonLabel,
    },
    setup() {
      return { heart, calendar };
    },
  });
</script>
```
