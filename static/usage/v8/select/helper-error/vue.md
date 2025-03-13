```html
<template>
  <form @submit.prevent="submit">
    <ion-select
      v-model="favFruit"
      label="Favorite fruit"
      placeholder="Select fruit"
      helper-text="Select your favorite fruit"
      error-text="This field is required"
      @ionChange="validateSelect"
      @ionBlur="onIonBlur"
      :class="{ 'ion-valid': isValid, 'ion-invalid': isValid === false, 'ion-touched': isTouched }"
    >
      <ion-select-option value="apple">Apple</ion-select-option>
      <ion-select-option value="banana">Banana</ion-select-option>
      <ion-select-option value="orange">Orange</ion-select-option>
    </ion-select>

    <br />

    <ion-button type="submit" size="small">Submit</ion-button>
  </form>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { IonSelect, IonSelectOption, IonButton, SelectCustomEvent } from '@ionic/vue';

  export default defineComponent({
    components: {
      IonSelect,
      IonSelectOption,
      IonButton,
    },
    setup() {
      const favFruit = ref('');
      const isTouched = ref(false);
      const isValid = ref<boolean | undefined>();

      const validateSelect = (event: SelectCustomEvent<{ value: string }>) => {
        isValid.value = event.detail.value ? true : false;
      };

      const markTouched = () => {
        isTouched.value = true;
      };

      const onIonBlur = () => {
        markTouched();
        validateSelect({ detail: { value: favFruit.value } } as SelectCustomEvent<{ value: string }>);
      };

      const submit = () => {
        markTouched();
        validateSelect({ detail: { value: favFruit.value } } as SelectCustomEvent<{ value: string }>);
      };

      return {
        favFruit,
        isTouched,
        isValid,
        validateSelect,
        submit,
      };
    },
  });
</script>
```
