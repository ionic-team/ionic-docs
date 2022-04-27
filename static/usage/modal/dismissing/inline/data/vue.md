```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Inline Modal</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <p class="ion-text-center">{{ message }}</p>
    <ion-modal ref="modal" is-open="true">
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
          <ion-button slot="end" fill="clear" @click="dismiss()">Dismiss</ion-button>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item>
          <ion-label>Enter your name</ion-label>
          <ion-input ref="input" type="text" placeholder="Your name"></ion-input>
        </ion-item>
      </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script>
  import { IonButton, IonModal, IonHeader, IonToolbar, IonTitle, IonItem, IonInput } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonButton, IonModal, IonHeader, IonToolbar, IonTitle, IonItem, IonInput },
    data() {
      return {
        message: '',
      };
    },
    methods: {
      dismiss() {
        const name = this.$refs.input.$el.value;
        this.message = `Hello, ${name}!`;
        this.$refs.modal.$el.dismiss();
      },
    },
  });
</script>
```
