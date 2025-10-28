```html
<template>
  <ion-list>
    <ion-radio-group value="truncated">
      <ion-item>
        <ion-radio value="truncated">Truncated with ellipsis by default</ion-radio>
      </ion-item>
      <ion-item>
        <ion-radio value="wrapped-part" class="wrapped">Wrapping with text-wrap applied to label shadow part</ion-radio>
      </ion-item>
      <ion-item>
        <ion-radio value="wrapped-div">
          <div class="ion-text-wrap">Wrapping with ion-text-wrap class applied wrapper element</div>
        </ion-radio>
      </ion-item>
    </ion-radio-group>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonList, IonItem, IonRadio, IonRadioGroup } from '@ionic/vue';
</script>

<style scoped>
  ion-list {
    width: 250px;
  }

  ion-radio.wrapped::part(label) {
    white-space: normal;
  }
</style>
```
