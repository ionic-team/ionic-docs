```html
<template>
  <ion-segment value="custom">
    <ion-segment-button value="custom">
      <ion-label>Custom</ion-label>
    </ion-segment-button>
    <ion-segment-button value="segment">
      <ion-label>Segment</ion-label>
    </ion-segment-button>
  </ion-segment>
</template>

<script lang="ts">
  import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonLabel, IonSegment, IonSegmentButton },
  });
</script>

<style>
  ion-segment {
    --background: #54dc98;
  }
</style>
```
