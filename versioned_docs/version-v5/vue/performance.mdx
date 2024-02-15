---
sidebar_label: Performance
---

# Vue Performance

## v-for with Ionic Components

When using `v-for` with Ionic components, we recommend using Vue's `key` attribute. This allows Vue to re-render loop elements in an efficient way by only updating the content inside of the component rather than re-creating the component altogether.

By using `key` you can provide a stable identity for each loop element so Vue can track insertions and deletions within the iterator. Below is an example of how to use `key`:

```html
<template>
  <ion-page>
    <ion-content>
      <ion-item v-for="item of items" :key="item.id">
        <ion-label>{{ item.value }}</ion-label>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonContent, IonItem, IonLabel, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonContent,
      IonItem,
      IonLabel,
      IonPage
    },
    setup() {
      const items = ref([
        { id: 0, value: 'Item 0' },
        { id: 1, value: 'Item 1' },
        ...
      ]);

      return { items }
    }
  });
</script>
```

In this example, we have an array of objects called `items`. Each object contains a `value` and an `id`. Using the `key` attribute, we pass the `item.id` for each object. This `id` is used to provide a stable identity for each loop element.

For more information on how Vue manages state with `v-for` see https://v3.vuejs.org/guide/list.html#maintaining-state
