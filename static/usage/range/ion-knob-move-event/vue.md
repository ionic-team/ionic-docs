```html
<template>
  <div>
    <ion-range @ionKnobMoveStart="onIonKnobMoveStart" @ionKnobMoveEnd="onIonKnobMoveEnd"></ion-range>
    <div>
      <ion-label>ionKnobMoveStart: {{moveStart}}</ion-label>
    </div>
    <div>
      <ion-label>onIonKnobMoveEnd: {{moveEnd}}</ion-label>
    </div>
  </div>
</template>

<script lang="ts">
  import { IonRange, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonRange, IonLabel },
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
