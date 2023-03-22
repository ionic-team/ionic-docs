```html
<template>
  <ion-radio-group allow-empty-selection="true" value="turtles">
    <ion-radio value="dogs">Dogs</ion-radio><br />
    <ion-radio value="cats">Cats</ion-radio><br />
    <ion-radio value="turtles">Turtles</ion-radio><br />
    <ion-radio value="fish">Fish</ion-radio><br />
  </ion-radio-group>
</template>

<script lang="ts">
  import { IonRadio, IonRadioGroup } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonRadio, IonRadioGroup },
  });
</script>
```
