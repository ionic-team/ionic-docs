```html
<template>
  <ion-list>
    <ion-item>
      <ion-textarea label-placement="floating" value="Lorem Ipsum">
        <div slot="label">Comments <ion-text color="danger">(Required)</ion-text></div>
      </ion-textarea>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonTextarea, IonItem, IonList, IonText } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonTextarea, IonItem, IonList, IonText },
  });
</script>
```
