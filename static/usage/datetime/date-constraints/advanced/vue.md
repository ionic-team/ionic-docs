```html
<template>
  <ion-datetime :is-date-enabled="isWeekday"></ion-datetime>
</template>

<script>
  import { IonDatetime } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonDatetime },
    setup() {
      const isWeekday = (dateString) => {
        const date = new Date(dateString);
        const utcDay = date.getUTCDay();
        
        /**
         * Date will be enabled if it is not
         * Sunday or Saturday
         */
        return utcDay !== 0 && utcDay !== 6;
      }
      
      return { isWeekday }
    }
  });
</script>
```
