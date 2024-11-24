```html
<template>
  <ion-list>
    <ion-item>
      <ion-textarea label-placement="stacked" label="Comments" placeholder="Enter your comments">
        <ion-icon slot="start" :icon="lockClosed" aria-hidden="true"></ion-icon>
        <ion-button fill="clear" slot="end" aria-label="Show/hide">
          <ion-icon slot="icon-only" :icon="eye" aria-hidden="true"></ion-icon>
        </ion-button>
      </ion-textarea>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonButton, IonIcon, IonItem, IonList, IonTextarea } from '@ionic/vue';
  import { eye, lockClosed } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonButton,
      IonIcon,
      IonItem,
      IonList,
      IonTextarea,
    },
    setup() {
      return { eye, lockClosed };
    },
  });
</script>
```
