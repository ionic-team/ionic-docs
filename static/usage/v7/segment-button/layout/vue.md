```html
<template>
  <ion-segment value="heart">
    <ion-segment-button value="call">
      <ion-icon :icon="call"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="heart">
      <ion-icon :icon="heart"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="pin">
      <ion-icon :icon="pin"></ion-icon>
    </ion-segment-button>
  </ion-segment>

  <ion-segment value="heart">
    <ion-segment-button value="call">
      <ion-label>Call</ion-label>
      <ion-icon :icon="call"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="heart">
      <ion-label>Heart</ion-label>
      <ion-icon :icon="heart"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="pin">
      <ion-label>Pin</ion-label>
      <ion-icon :icon="pin"></ion-icon>
    </ion-segment-button>
  </ion-segment>

  <ion-segment value="heart">
    <ion-segment-button value="call" layout="icon-bottom">
      <ion-label>Call</ion-label>
      <ion-icon :icon="call"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="heart" layout="icon-bottom">
      <ion-label>Heart</ion-label>
      <ion-icon :icon="heart"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="pin" layout="icon-bottom">
      <ion-label>Pin</ion-label>
      <ion-icon :icon="pin"></ion-icon>
    </ion-segment-button>
  </ion-segment>

  <ion-segment value="heart">
    <ion-segment-button value="call" layout="icon-start">
      <ion-label>Call</ion-label>
      <ion-icon :icon="call"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="heart" layout="icon-start">
      <ion-label>Heart</ion-label>
      <ion-icon :icon="heart"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="pin" layout="icon-start">
      <ion-label>Pin</ion-label>
      <ion-icon :icon="pin"></ion-icon>
    </ion-segment-button>
  </ion-segment>

  <ion-segment value="heart">
    <ion-segment-button value="call" layout="icon-end">
      <ion-label>Call</ion-label>
      <ion-icon :icon="call"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="heart" layout="icon-end">
      <ion-label>Heart</ion-label>
      <ion-icon :icon="heart"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="pin" layout="icon-end">
      <ion-label>Pin</ion-label>
      <ion-icon :icon="pin"></ion-icon>
    </ion-segment-button>
  </ion-segment>
</template>

<script lang="ts">
  import { IonIcon, IonLabel, IonSegment, IonSegmentButton } from '@ionic/vue';
  import { call, heart, pin } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonIcon, IonLabel, IonSegment, IonSegmentButton },
    setup() {
      return { call, heart, pin };
    }
  });
</script>
```
