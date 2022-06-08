```html
<template>
  <ion-content>
    <ion-range @ionKnobMoveStart="onIonKnobMoveStart" @ionKnobMoveEnd="onIonKnobMoveEnd"></ion-range>
    <div>
      <ion-label>ionKnobMoveStart: {{moveStart}}</ion-label>
    </div>
    <div>
      <ion-label>onIonKnobMoveEnd: {{moveEnd}}</ion-label>
    </div>
  </ion-content>
</template>

<script lang="ts">
  import { IonContent, IonLabel, IonRange } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent, IonLabel, IonRange },
    data() {
      return {
        moveStart: '',
        moveEnd: '',
      };
    },
    methods: {
      onIonKnobMoveStart({ detail }) {
        this.moveStart = detail.value;
      },
      onIonKnobMoveEnd({ detail }) {
        this.moveEnd = detail.value;
      },
    },
  });
</script>
```
