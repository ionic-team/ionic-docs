```html
<template>
  <ion-chip>
    <ion-avatar>
      <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
    </ion-avatar>
    <ion-label>Chip Avatar</ion-label>
  </ion-chip>
</template>

<script lang="ts">
  import { IonAvatar, IonChip, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonAvatar, IonChip, IonLabel }
  });
</script>
```
