```html
<template>
  <ion-list>
    <ion-item>
      <ion-input
        label="Alphanumeric Characters"
        :value="inputModel"
        @ionInput="onInput($event)"
        ref="ionInputEl"
      ></ion-input>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonList } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonList },
    setup() {
      const ionInputEl = ref();
      const inputModel = ref('');
      const onInput = (event) => {
        const value = event.target!.value;

        // Removes non alphanumeric characters
        const filteredValue = value.replace(/[^a-zA-Z0-9]+/g, '');

        /**
         * Update both the state variable and
         * the component to keep them in sync.
         */
        inputModel.value = filteredValue;

        const inputCmp = ionInputEl.value;
        if (inputCmp !== undefined) {
          inputCmp.$el.value = filteredValue;
        }
      };

      return { ionInputEl, inputModel, onInput };
    },
  });
</script>
```
