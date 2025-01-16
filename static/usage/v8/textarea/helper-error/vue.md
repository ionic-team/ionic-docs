```html
<template>
  <ion-textarea
    ref="input"
    fill="solid"
    label="Email"
    label-placement="floating"
    helper-text="Enter a valid email"
    error-text="Invalid email"
    @ionInput="validate"
    @ionBlur="markTouched"
  ></ion-textarea>
</template>

<script lang="ts">
  import { IonTextarea } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonTextarea },
    methods: {
      validateEmail(email) {
        return email.match(
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        );
      },

      validate(event) {
        const value = event.target.value;

        this.$refs.input.$el.classList.remove('ion-valid');
        this.$refs.input.$el.classList.remove('ion-invalid');

        if (value === '') return;

        this.validateEmail(value)
          ? this.$refs.input.$el.classList.add('ion-valid')
          : this.$refs.input.$el.classList.add('ion-invalid');
      },

      markTouched() {
        this.$refs.input.$el.classList.add('ion-touched');
      },
    },
  });
</script>
```
