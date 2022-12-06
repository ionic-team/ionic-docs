```html
<template>
  <ion-list>
    <ion-item>
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
    </ion-item>
  </ion-list>
  <div class="ion-padding">
    <p v-for="log in logs">{{ log }}</p>
  </div>
</template>

<script>
  import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonList, IonSelect, IonSelectOption },
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
