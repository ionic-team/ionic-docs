```html
<template>
  <ion-toggle aria-label="Enable Notifications"></ion-toggle>
  <ion-toggle :checked="true" aria-label="Enable Notifications"></ion-toggle>
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
    padding: 12px;

    --track-background: #ddd;
    --track-background-checked: #ddd;

    --handle-background: #eb7769;
    --handle-background-checked: #95c34e;

    --handle-width: 25px;
    --handle-height: 27px;
    --handle-max-height: auto;
    --handle-spacing: 6px;

    --handle-border-radius: 4px;
    --handle-box-shadow: none;
  }

  ion-toggle::part(track) {
    height: 10px;
    width: 65px;

    /* Required for iOS handle to overflow the height of the track */
    overflow: visible;
  }
</style>
```
