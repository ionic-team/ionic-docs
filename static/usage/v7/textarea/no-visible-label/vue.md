```html
<template>
  <ion-list>
    <ion-item>
      <ion-textarea aria-label="Comments" value="Lorem Ipsum"></ion-textarea>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonTextarea, IonItem, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonTextarea, IonItem, IonList },
  });
</script>
```
