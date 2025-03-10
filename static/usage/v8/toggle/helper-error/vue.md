```html
<template>
  <form @submit.prevent="submit">
    <ion-toggle
      v-model="wifi"
      helper-text="This needs to be enabled"
      error-text="This field is required"
      @ionChange="validateToggle"
      :class="{ 'ion-valid': isValid, 'ion-invalid': isValid === false, 'ion-touched': isTouched }"
    >
      Wi-Fi
    </ion-toggle>

    <br />

    <ion-button type="submit" size="small">Submit</ion-button>
  </form>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { IonToggle, IonButton, ToggleCustomEvent } from '@ionic/vue';

  export default defineComponent({
    components: {
      IonToggle,
      IonButton,
    },
    setup() {
      const wifi = ref(false);
      const isTouched = ref(false);
      const isValid = ref<boolean | undefined>();

      const validateToggle = (event: ToggleCustomEvent<{ checked: boolean }>) => {
        isTouched.value = true;
        isValid.value = event.detail.checked;
      };

      const submit = () => {
        validateToggle({ detail: { checked: wifi.value } } as ToggleCustomEvent<{ checked: boolean }>);
      };

      return {
        wifi,
        isTouched,
        isValid,
        validateToggle,
        submit,
      };
    },
  });
</script>
```
