```html
<template>
  <ion-list>
    <ion-item>
      <ion-input inputmode="email" label-placement="stacked" placeholder="Enter a username or email address">
        <code slot="label">inputmode="email"</code>
      </ion-input>
    </ion-item>
    <ion-item>
      <ion-input inputmode="numeric" label-placement="stacked" placeholder="Enter an integer">
        <code slot="label">inputmode="numeric"</code>
      </ion-input>
    </ion-item>
    <ion-item>
      <ion-input inputmode="decimal" label-placement="stacked" placeholder="Enter a decimal">
        <code slot="label">inputmode="decimal"</code>
      </ion-input>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonList, IonItem, IonInput } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonList,
      IonItem,
      IonInput,
    },
  });
</script>
```
