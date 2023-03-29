```html
<template>
  <ion-item>
    <ion-label>Default Label</ion-label>
  </ion-item>

  <ion-item>
    <ion-label>
      Multi-line text that should ellipsis when it is too long
      to fit on one line. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-label class="ion-text-wrap">
      Multi-line text that should wrap when it is too long
      to fit on one line. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-label>
      <h1>Heading</h1>
      <p>Paragraph</p>
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
  import { IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel },
  });
</script>
```
