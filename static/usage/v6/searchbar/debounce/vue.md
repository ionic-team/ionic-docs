```html
<template>
  <ion-searchbar :debounce="1000" @ionChange="handleChange($event)"></ion-searchbar>

  <ion-list>
    <ion-item v-for="result in results">
      <ion-label>{{ result }}</ion-label>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonItem, IonList, IonSearchbar } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonItem, IonList, IonSearchbar },
    setup() {
      const data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
      const results = ref(data);

      return { data, results };
    },
    methods: {
      handleChange(event) {
        const query = event.target.value.toLowerCase();
        this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
      },
    },
  });
</script>
```
