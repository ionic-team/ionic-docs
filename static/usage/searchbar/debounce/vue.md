```html
<template>
  <ion-searchbar debounce="1000" @ionChange="handleChange($event)"></ion-searchbar>

  <ion-list ref="list">
    <ion-item>Amsterdam</ion-item>
    <ion-item>Buenos Aires</ion-item>
    <ion-item>Cairo</ion-item>
    <ion-item>Geneva</ion-item>
    <ion-item>Hong Kong</ion-item>
    <ion-item>Istanbul</ion-item>
    <ion-item>London</ion-item>
    <ion-item>Madrid</ion-item>
    <ion-item>New York</ion-item>
    <ion-item>Panama City</ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonItem, IonList, IonSearchbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonList, IonSearchbar },
    methods: {
      handleChange(event) {
        const query = event.target.value.toLowerCase();
        const items = Array.from(this.$refs.list.$el.children);

        requestAnimationFrame(() => {
          items.forEach((item) => {
            const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
            item.style.display = shouldShow ? 'block' : 'none';
          });
        });
      },
    },
  });
</script>
```
