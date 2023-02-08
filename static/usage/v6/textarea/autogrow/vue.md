```html
<template>
  <ion-item>
    <ion-textarea placeholder="Type something here" :auto-grow="true"
      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus sem, auctor accumsan egestas sed, venenatis at ex. Nam consequat ex odio, suscipit rhoncus orci dictum eget. Aenean sit amet ligula varius felis facilisis lacinia nec volutpat nulla. Duis ullamcorper sit amet turpis sed blandit. Integer pretium massa eu faucibus interdum.">
    </ion-textarea>
  </ion-item>
</template>

<script>
  import { IonItem, IonTextarea } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonTextarea },
  });
</script>
```
