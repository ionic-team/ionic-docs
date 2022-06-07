```html
<template>
  <ion-content>
    <ion-list>
      <ion-item v-for="breadcrumb in $props.collapsedBreadcrumbs" :href="breadcrumb.href">
        <ion-label>{{ breadcrumb.textContent }}</ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
import { IonContent, IonItem, IonLabel, IonList } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Popover',
  props: {
    collapsedBreadcrumbs: { type: Array, default: [] }
  },
  components: { IonContent, IonItem, IonLabel, IonList }
});
</script>
```