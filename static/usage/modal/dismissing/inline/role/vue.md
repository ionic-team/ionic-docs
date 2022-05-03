```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Inline Modal</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <p class="ion-text-center">{{ message }}</p>
    <ion-modal ref="modal" is-open="true" @didDismiss="onDismiss">
      <ion-header>
        <ion-toolbar>
          <ion-button slot="start" fill="clear" @click="dismiss('cancel')">Cancel</ion-button>
          <ion-title>Modal</ion-title>
          <ion-button slot="end" fill="clear" @click="dismiss('confirm')">Confirm</ion-button>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>Select a button to dismiss the modal.</p>
      </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script>
  import { IonButton, IonModal, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton, IonModal, IonHeader, IonToolbar, IonTitle, IonContent },
    data() {
      return {
        message: '',
      };
    },
    methods: {
      dismiss(role) {
        this.$refs.modal.$el.dismiss(null, role);
      },
      onDismiss(ev) {
        this.message = `Modal was dismissed with role: ${ev.detail.role}`;
      },
    },
  });
</script>
```
