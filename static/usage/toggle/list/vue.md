```html
<template>
  <ion-list>
    <ion-item>
      <ion-label>End Toggle</ion-label>
      <ion-toggle slot="end" :checked="true"></ion-toggle>
    </ion-item>
    <ion-item>
      <ion-label>Start Toggle</ion-label>
      <ion-toggle slot="start" :checked="true"></ion-toggle>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonItem, IonLabel, IonList, IonToggle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonToggle },
  });
</script>
```
