```html
<template>
  <ion-menu :type="menuType" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-menu-toggle>
        <ion-button>Click to close the menu</ion-button>
      </ion-menu-toggle>
    </ion-content>
  </ion-menu>
  
  <div class="ion-page" id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h2>Select an overlay type:</h2>
      <ion-radio-group value="overlay" v-model="menuType">
        <ion-item>
          <ion-label>
            <code>overlay</code>
          </ion-label>
          <ion-radio value="overlay"></ion-radio>
        </ion-item>
        <ion-item>
          <ion-label>
            <code>reveal</code>
          </ion-label>
          <ion-radio value="reveal"></ion-radio>
        </ion-item>
        <ion-item>
          <ion-label>
            <code>push</code>
          </ion-label>
          <ion-radio value="push"></ion-radio>
        </ion-item>
      </ion-radio-group> <br />
      <ion-menu-toggle>
        <ion-button>Click to open the menu</ion-button>
      </ion-menu-toggle>
    </ion-content>
  </div>
</template>

<script lang="ts">
  import {
    IonButton,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonMenu,
    IonMenuToggle,
    IonPage,
    IonRadio,
    IonRadioGroup,
    IonTitle,
    IonToolbar
  } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: {
      IonButton,
      IonContent,
      IonHeader,
      IonItem,
      IonLabel,
      IonMenu,
      IonMenuToggle,
      IonPage,
      IonRadio,
      IonRadioGroup,
      IonTitle,
      IonToolbar
    },
    setup() {
      const menuType = ref('overlay');
      
      return { menuType };
    }
  });
</script>
```
