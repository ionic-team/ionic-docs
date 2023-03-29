```html
<template>
  <ion-list>
    <ion-item-sliding>
      <ion-item-options side="start">
        <ion-item-option color="success">
          <ion-icon slot="icon-only" :icon="archive"></ion-icon>
        </ion-item-option>
      </ion-item-options>

      <ion-item>
        <ion-label>Sliding Item with Icons Only</ion-label>
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option>
          <ion-icon slot="icon-only" :icon="heart"></ion-icon>
        </ion-item-option>
        <ion-item-option color="danger">
          <ion-icon slot="icon-only" :icon="trash"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item-options side="start">
        <ion-item-option color="success">
          <ion-icon slot="start" :icon="archive"></ion-icon>
          Archive
        </ion-item-option>
      </ion-item-options>

      <ion-item>
        <ion-label>
          Sliding Item with Start Icons
        </ion-label>
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option>
          <ion-icon slot="start" :icon="heart"></ion-icon>
          Favorite
        </ion-item-option>
        <ion-item-option color="danger">
          <ion-icon slot="start" :icon="trash"></ion-icon>
          Delete
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item-options side="start">
        <ion-item-option color="success">
          <ion-icon slot="end" :icon="archive"></ion-icon>
          Archive
        </ion-item-option>
      </ion-item-options>

      <ion-item>
        <ion-label>
          Sliding Item with End Icons
        </ion-label>
      </ion-item>

      <ion-item-options>
        <ion-item-option>
          <ion-icon slot="end" :icon="heart"></ion-icon>
          Favorite
        </ion-item-option>
        <ion-item-option color="danger">
          <ion-icon slot="end" :icon="trash"></ion-icon>
          Delete
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item-options side="start">
        <ion-item-option color="success">
          <ion-icon slot="top" :icon="archive"></ion-icon>
          Archive
        </ion-item-option>
      </ion-item-options>

      <ion-item>
        <ion-label>
          Sliding Item with Top Icons
        </ion-label>
      </ion-item>

      <ion-item-options>
        <ion-item-option>
          <ion-icon slot="top" :icon="heart"></ion-icon>
          Favorite
        </ion-item-option>
        <ion-item-option color="danger">
          <ion-icon slot="top" :icon="trash"></ion-icon>
          Delete
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item-options side="start">
        <ion-item-option color="success">
          <ion-icon slot="bottom" :icon="archive"></ion-icon>
          Archive
        </ion-item-option>
      </ion-item-options>

      <ion-item>
        <ion-label>
          Sliding Item with Bottom Icons
        </ion-label>
      </ion-item>

      <ion-item-options>
        <ion-item-option>
          <ion-icon slot="bottom" :icon="heart"></ion-icon>
          Favorite
        </ion-item-option>
        <ion-item-option color="danger">
          <ion-icon slot="bottom" :icon="trash"></ion-icon>
          Delete
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-list>
</template>

<script lang="ts">
  import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/vue';
  import { archive, heart, trash } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList },
    setup() {
      return { archive, heart, trash }
    }
  });
</script>
```
