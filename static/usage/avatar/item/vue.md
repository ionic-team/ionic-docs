```html
<template>
  <ion-item>
    <ion-avatar slot="start">
      <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
    </ion-avatar>
    <ion-label>Item Avatar</ion-label>
  </ion-item>
</template>

<script lang="ts">
  import { IonAvatar, IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonAvatar, IonItem, IonLabel }
  });
</script>
```
