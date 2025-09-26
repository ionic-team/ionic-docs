```html
<template>
  <ion-searchbar :debounce="1000" @ionInput="handleInput($event)"></ion-searchbar>

  <ion-list>
    <ion-item v-for="result in results">
      <ion-label>{{ result }}</ion-label>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonList, IonSearchbar } from '@ionic/vue';
  import { ref } from 'vue';

  const data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  const results = ref(data);

  const handleInput = (event) => {
    const query = event.target.value.toLowerCase();
    results.value = data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  };
</script>
```
