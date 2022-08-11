```html
<template>
  <ion-chip>
    <ion-avatar>
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
    </ion-avatar>
    <ion-label>Avatar Chip</ion-label>
    <ion-icon :icon="closeCircle"></ion-icon>
  </ion-chip>

  <ion-chip>
    <ion-icon :icon="pin" color="primary"></ion-icon>
    <ion-label>Icon Chip</ion-label>
    <ion-icon :icon="close"></ion-icon>
  </ion-chip>
</template>

<script lang="ts">
  import { IonChip, IonAvatar, IonLabel, IonIcon } from '@ionic/vue';
  import { close, closeCircle, pin } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonChip, IonAvatar, IonLabel, IonIcon },
    setup() {
      return {
        close,
        closeCircle,
        pin,
      };
    },
  });
</script>
```
