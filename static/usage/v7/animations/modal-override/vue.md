```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Page</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="modal-trigger">Present Modal</ion-button>
    <ion-modal trigger="modal-trigger" ref="modalEl" :enterAnimation="enterAnimation" :leaveAnimation="leaveAnimation">
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="closeModal()">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding"> Modal Content </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script lang="ts">
  import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonModal,
    IonToolbar,
    IonTitle,
    createAnimation,
  } from '@ionic/vue';

  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: {
      IonButton,
      IonButtons,
      IonContent,
      IonHeader,
      IonModal,
      IonToolbar,
      IonTitle,
    },
    setup() {
      const modalEl = ref(null);

      const enterAnimation = (baseEl: HTMLElement) => {
        const root = baseEl.shadowRoot;

        const backdropAnimation = createAnimation()
          .addElement(root!.querySelector('ion-backdrop')!)
          .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

        const wrapperAnimation = createAnimation()
          .addElement(root!.querySelector('.modal-wrapper')!)
          .keyframes([
            { offset: 0, opacity: '0', transform: 'scale(0)' },
            { offset: 1, opacity: '0.99', transform: 'scale(1)' },
          ]);

        return createAnimation()
          .addElement(baseEl)
          .easing('ease-out')
          .duration(500)
          .addAnimation([backdropAnimation, wrapperAnimation]);
      };

      const leaveAnimation = (baseEl: HTMLElement) => {
        return enterAnimation(baseEl).direction('reverse');
      };

      const closeModal = () => {
        modalEl.value?.$el.dismiss();
      };

      return {
        close,
        modalEl,
        closeModal,
        enterAnimation,
        leaveAnimation,
      };
    },
  });
</script>
```
