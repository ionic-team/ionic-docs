```html
<template>
  <ion-list>
    <ion-item>
      <ion-label>Regular textarea</ion-label>
      <ion-textarea placeholder="Type something here"></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-label>Readonly textarea</ion-label>
      <ion-textarea :readonly="true" placeholder="Can't edit this"></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-label>Disabled textarea</ion-label>
      <ion-textarea :disabled="true" placeholder="Can't type here"></ion-textarea>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonItem, IonLabel, IonList, IonTextarea } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonTextarea },
  });
</script>
```
