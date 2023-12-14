```html
<template>
  <ion-datetime presentation="date" :highlighted-dates="highlightedDates"></ion-datetime>
</template>

<script lang="ts" setup>
  import { IonDatetime } from '@ionic/vue';

  const highlightedDates = (isoString) => {
    const date = new Date(isoString);
    const utcDay = date.getUTCDate();

    if (utcDay % 5 === 0) {
      return {
        textColor: '#800080',
        backgroundColor: '#ffc0cb',
      };
    }

    if (utcDay % 3 === 0) {
      return {
        textColor: 'var(--ion-color-secondary-contrast)',
        backgroundColor: 'var(--ion-color-secondary)',
      };
    }

    return undefined;
  };
</script>
```
