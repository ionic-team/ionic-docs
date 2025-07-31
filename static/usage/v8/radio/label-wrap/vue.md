```html
<template>
  <ion-list>
    <ion-radio-group value="truncated">
      <ion-item>
        <ion-radio value="truncated">Truncated with ellipsis by default</ion-radio>
      </ion-item>
      <ion-item>
        <ion-radio value="wrapped" class="wrapped">`text-wrap` applied to `label` shadow part</ion-radio>
      </ion-item>
    </ion-radio-group>
  </ion-list>
</template>

<script lang="ts">
  import { IonList, IonItem, IonRadio, IonRadioGroup } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonList, IonItem, IonRadio, IonRadioGroup },
  });
</script>

<style scoped>
  ion-list {
    width: 250px;
  }

  ion-radio.wrapped::part(label) {
    text-wrap: wrap;
  }
</style>
```
