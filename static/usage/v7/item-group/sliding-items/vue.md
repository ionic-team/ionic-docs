```html
<template>
  <ion-item-group>
    <ion-item-divider>
      <ion-label>
        Fruits
      </ion-label>
    </ion-item-divider>

    <ion-item-sliding>
      <ion-item>
        <ion-label>
          Grapes
        </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option>
          Favorite
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item>
        <ion-label>
          Apples
        </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option>
          Favorite
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item lines="none">
        <ion-label>
          Bananas
        </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option>
          Favorite
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-item-group>

  <ion-item-group>
    <ion-item-divider>
      <ion-label>
        Vegetables
      </ion-label>
    </ion-item-divider>

    <ion-item-sliding>
      <ion-item>
        <ion-label>
          Carrots
        </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option>
          Favorite
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item>
        <ion-label>
          Broccoli
        </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option>
          Favorite
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item lines="none">
        <ion-label>
          Celery
        </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option>
          Favorite
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-item-group>
</template>

<script lang="ts">
  import { IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel },
  });
</script>
```
