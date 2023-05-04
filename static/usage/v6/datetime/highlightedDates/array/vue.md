```html
<template>
  <ion-datetime presentation="date" value="2023-01-01" :highlighted-dates="highlightedDates"></ion-datetime>
</template>

<script lang="ts">
  import { IonDatetime } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonDatetime },
    setup() {
      const highlightedDates = [
        {
          date: '2023-01-05',
          textColor: '#800080',
          backgroundColor: '#ffc0cb',
        },
        {
          date: '2023-01-10',
          textColor: '#09721b',
          backgroundColor: '#c8e5d0',
        },
        {
          date: '2023-01-20',
          textColor: 'var(--ion-color-secondary-contrast)',
          backgroundColor: 'var(--ion-color-secondary)',
        },
        {
          date: '2023-01-23',
          textColor: 'rgb(68, 10, 184)',
          backgroundColor: 'rgb(211, 200, 229)',
        },
      ];

      return { highlightedDates };
    },
  });
</script>
```
