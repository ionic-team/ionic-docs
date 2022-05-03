```html
<template>
  <ion-select
    placeholder="Select fruit"
    @ionChange="pushLog('ionChange fired with value: ' + $event.detail.value)"
    @ionCancel="pushLog('ionCancel fired')"
    @ionDismiss="pushLog('ionDismiss fired')"
  >
    <ion-select-option value="apples">Apples</ion-select-option>
    <ion-select-option value="oranges">Oranges</ion-select-option>
    <ion-select-option value="bananas">Bananas</ion-select-option>
  </ion-select>
  <div class="ion-padding">
    <p v-for="log in logs">{{ log }}</p>
  </div>
</template>

<script>
  import { IonSelect, IonSelectOption } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonSelect, IonSelectOption },
    data() {
      return {
        logs: []
      }
    },
    methods: {
      pushLog(msg) {
        this.logs.unshift(msg);
      }
    }
  });
</script>
```
