```html
<template>
  <ion-toggle></ion-toggle>
  <ion-toggle :checked="true"></ion-toggle>
</template>

<script lang="ts">
  import { IonToggle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonToggle },
  });
</script>

<style scoped>
  ion-toggle {
    height: 10px;
    width: 65px;

    padding: 12px;

    --handle-width: 25px;
    --handle-height: 27px;
    --handle-max-height: auto;
    --handle-spacing: 6px;

    /* Required for iOS handle to overflow the height of the track */
    overflow: visible;
    contain: none;
  }

  ion-toggle::part(track),
  ion-toggle.toggle-checked::part(track) {
    background: #ddd;
  }

  ion-toggle::part(handle) {
    background: #eb7769;

    border-radius: 4px;
    box-shadow: none;
  }

  ion-toggle.toggle-checked::part(handle) {
    background: #95c34e;
  }
</style>
```
