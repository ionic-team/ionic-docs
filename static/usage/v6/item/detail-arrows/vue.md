```html
<template>
  <ion-item detail="true">
    <ion-label>
      <h3>Text Item</h3>
      <p>Detail set to true - detail arrow displays on both modes</p>
    </ion-label>
  </ion-item>

  <ion-item button>
    <ion-label>
      <h3>Button Item</h3>
      <p>Default detail - detail arrow displays on iOS only</p>
    </ion-label>
  </ion-item>

  <ion-item button detail="true">
    <ion-label>
      <h3>Button Item</h3>
      <p>Detail set to true - detail arrow displays on both modes</p>
    </ion-label>
  </ion-item>

  <ion-item button detail="false">
    <ion-label>
      <h3>Button Item</h3>
      <p>Detail set to false - detail arrow hidden on both modes</p>
    </ion-label>
  </ion-item>

  <ion-item button detail="true" :detailIcon="caretForwardOutline">
    <ion-label>
      <h3>Button Item</h3>
      <p>Detail set to true - detail arrow displays on both modes</p>
      <p>Detail icon set to caret-forward-outline</p>
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
  import { IonItem, IonLabel } from '@ionic/vue';
  import { caretForwardOutline } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel },
    setup() {
      return {
        caretForwardOutline,
      };
    },
  });
</script>
