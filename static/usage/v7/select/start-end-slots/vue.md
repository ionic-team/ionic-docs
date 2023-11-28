```html
<template>
  <ion-list>
    <ion-item>
      <ion-select label-placement="stacked" label="Favorite fruit" value="apple">
        <ion-icon slot="start" :icon="leaf" aria-hidden="true"></ion-icon>
        <ion-select-option value="apple">Apple</ion-select-option>
        <ion-select-option value="banana">Banana</ion-select-option>
        <ion-select-option value="orange">Orange</ion-select-option>
        <ion-button fill="clear" slot="end" aria-label="Show/hide password">
          <ion-icon slot="icon-only" :icon="eye" aria-hidden="true"></ion-icon>
        </ion-button>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonButton, IonIcon, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';
  import { eye, leaf } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonButton,
      IonIcon,
      IonItem,
      IonList,
      IonSelect,
      IonSelectOption,
    },
    setup() {
      return { eye, leaf };
    },
  });
</script>
```
