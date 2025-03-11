```html
<template>
  <form @submit.prevent="submit">
    <ion-checkbox
      v-model="agree"
      helper-text="Agree to the terms before continuing"
      error-text="You must agree to the terms to continue"
      @ionChange="validateCheckbox"
      :class="{ 'ion-valid': isValid, 'ion-invalid': isValid === false, 'ion-touched': isTouched }"
    >
      I agree to the terms and conditions
    </ion-checkbox>

    <br />

    <ion-button type="submit" size="small">Submit</ion-button>
  </form>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { IonCheckbox, IonButton, CheckboxCustomEvent } from '@ionic/vue';

  export default defineComponent({
    components: {
      IonCheckbox,
      IonButton,
    },
    setup() {
      const agree = ref(false);
      const isTouched = ref(false);
      const isValid = ref<boolean | undefined>();

      const validateCheckbox = (event: CheckboxCustomEvent<{ checked: boolean }>) => {
        isTouched.value = true;
        isValid.value = event.detail.checked;
      };

      const submit = () => {
        validateCheckbox({ detail: { checked: agree.value } } as CheckboxCustomEvent<{ checked: boolean }>);
      };

      return {
        agree,
        isTouched,
        isValid,
        validateCheckbox,
        submit,
      };
    },
  });
</script>
```
