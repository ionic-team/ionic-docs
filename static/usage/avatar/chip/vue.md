```html
<template>
  <ion-chip>
    <ion-avatar>
      <img src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg">
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
