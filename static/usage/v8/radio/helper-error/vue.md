```html
<template>
  <form @submit.prevent="submit">
    <ion-radio-group
      v-model="favFruit"
      helper-text="Select your favorite fruit"
      error-text="This field is required"
      @ionChange="validateRadioGroup"
      :class="{ 'ion-valid': isValid, 'ion-invalid': isValid === false, 'ion-touched': isTouched }"
    >
      <ion-radio value="grapes">Grapes</ion-radio><br />
      <ion-radio value="strawberries">Strawberries</ion-radio><br />
      <ion-radio value="pineapple">Pineapple</ion-radio><br />
      <ion-radio value="cherries">Cherries</ion-radio>
    </ion-radio-group>

    <br />

    <ion-button type="submit" size="small">Submit</ion-button>
  </form>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { IonRadioGroup, IonRadio, IonButton, RadioGroupCustomEvent } from '@ionic/vue';

  export default defineComponent({
    components: {
      IonRadioGroup,
      IonRadio,
      IonButton,
    },
    setup() {
      const favFruit = ref('');
      const isTouched = ref(false);
      const isValid = ref<boolean | undefined>();

      const validateRadioGroup = (event: RadioGroupCustomEvent<{ value: string }>) => {
        isTouched.value = true;
        isValid.value = event.detail.value ? true : false;
      };

      const submit = () => {
        validateRadioGroup({ detail: { value: favFruit.value } } as RadioGroupCustomEvent<{ value: string }>);
      };

      return {
        favFruit,
        isTouched,
        isValid,
        validateRadioGroup,
        submit,
      };
    },
  });
</script>
```
