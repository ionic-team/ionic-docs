```html
<template>
  <ion-item fill="solid" ref="item">
    <ion-label position="floating">Email</ion-label>
    <ion-input type="email" @ionInput="validate" @ionBlur="markTouched"></ion-input>
    <ion-note slot="helper">Enter a valid email</ion-note>
    <ion-note slot="error">Invalid email</ion-note>
  </ion-item>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonLabel, IonNote } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonLabel, IonNote },
    methods: {
      validateEmail(email) {
        return email.match(/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
      },

      validate(ev) {
        const value = ev.target.value;

        this.$refs.item.$el.classList.remove('ion-valid');
        this.$refs.item.$el.classList.remove('ion-invalid');

        if (value === '') return;

        this.validateEmail(value)
          ? this.$refs.item.$el.classList.add('ion-valid')
          : this.$refs.item.$el.classList.add('ion-invalid');
      },

      markTouched() {
        this.$refs.item.$el.classList.add('ion-touched')
      }
    },
  });
</script>
```
