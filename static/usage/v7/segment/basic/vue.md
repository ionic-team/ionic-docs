```html
<template>
  <ion-segment value="default">
    <ion-segment-button value="default">
      <ion-label>Default</ion-label>
    </ion-segment-button>
    <ion-segment-button value="segment">
      <ion-label>Segment</ion-label>
    </ion-segment-button>
  </ion-segment>

  <ion-segment :disabled="true" value="disabled">
    <ion-segment-button value="disabled">
      <ion-label>Disabled</ion-label>
    </ion-segment-button>
    <ion-segment-button value="segment">
      <ion-label>Segment</ion-label>
    </ion-segment-button>
  </ion-segment>
</template>

<script lang="ts" setup>
  import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/vue';
</script>
```
