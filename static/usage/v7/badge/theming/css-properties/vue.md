```html
<template>
  <ion-list>
    <ion-item>
      <ion-label>Badges styled</ion-label>
      <ion-badge>1</ion-badge>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonBadge, IonItem, IonLabel, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonBadge, IonItem, IonLabel, IonList },
  });
</script>

<style>
  ion-badge {
    --background: purple;
    --color: white;
    --padding-end: 20px;
    --padding-start: 20px;
  }
</style>
```
