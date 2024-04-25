```html
<template>
  <ion-header id="header">
    <ion-toolbar>
      <ion-title>Header</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <ion-button id="headerAnchor">Anchor to Header</ion-button>
    <ion-button id="footerAnchor">Anchor to Footer</ion-button>

    <ion-toast
      trigger="headerAnchor"
      position="top"
      position-anchor="header"
      message="Hello World!"
      :duration="2000"
    ></ion-toast>
    <ion-toast
      trigger="footerAnchor"
      position="bottom"
      position-anchor="footer"
      message="Hello World!"
      :duration="2000"
    ></ion-toast>
  </ion-content>

  <ion-footer id="footer">
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonFooter, IonHeader, IonTitle, IonToast, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonButton,
      IonContent,
      IonFooter,
      IonHeader,
      IonTitle,
      IonToast,
      IonToolbar,
    },
  });
</script>
```
