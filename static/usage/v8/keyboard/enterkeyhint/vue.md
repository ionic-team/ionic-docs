```html
<template>
  <ion-list>
    <ion-item>
      <ion-input enterkeyhint="search" label-placement="stacked" placeholder="Enter search query">
        <code slot="label">enterkeyhint="search"</code>
      </ion-input>
    </ion-item>
    <ion-item>
      <ion-input enterkeyhint="send" label-placement="stacked" placeholder="Type a message">
        <code slot="label">enterkeyhint="send"</code>
      </ion-input>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonList, IonItem, IonInput } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonList,
      IonItem,
      IonInput,
    },
  });
</script>
```
