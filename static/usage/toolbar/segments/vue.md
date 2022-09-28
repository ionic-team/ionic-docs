```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-segment value="all">
        <ion-segment-button value="all">
          All
        </ion-segment-button>
        <ion-segment-button value="favorites">
          Favorites
        </ion-segment-button>
      </ion-segment>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
  import { IonHeader, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonHeader, IonSegment, IonSegmentButton, IonTitle, IonToolbar },
  });
</script>
```
