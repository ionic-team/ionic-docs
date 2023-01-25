```html
<template>
  <ion-range @ionKnobMoveStart="onIonKnobMoveStart" @ionKnobMoveEnd="onIonKnobMoveEnd"></ion-range>
  <div>
    <ion-label>ionKnobMoveStart: {{moveStart}}</ion-label>
  </div>
  <div>
    <ion-label>onIonKnobMoveEnd: {{moveEnd}}</ion-label>
  </div>
</template>

<script lang="ts">
  import { IonLabel, IonRange } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonLabel, IonRange },
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
