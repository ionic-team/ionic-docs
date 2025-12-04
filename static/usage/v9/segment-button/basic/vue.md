```html
<template>
  <ion-segment value="buttons">
    <ion-segment-button value="default">
      <ion-label>Default</ion-label>
    </ion-segment-button>
    <ion-segment-button value="segment">
      <ion-label>Segment</ion-label>
    </ion-segment-button>
    <ion-segment-button value="buttons">
      <ion-label>Button</ion-label>
    </ion-segment-button>
  </ion-segment>

  <ion-segment value="buttons">
    <ion-segment-button value="disabled" :disabled="true">
      <ion-label>Disabled</ion-label>
    </ion-segment-button>
    <ion-segment-button value="segment">
      <ion-label>Segment</ion-label>
    </ion-segment-button>
    <ion-segment-button value="buttons">
      <ion-label>Button</ion-label>
    </ion-segment-button>
  </ion-segment>
</template>

<script setup lang="ts">
  import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/vue';
</script>
```
