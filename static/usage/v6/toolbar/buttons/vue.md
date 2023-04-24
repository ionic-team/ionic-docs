```html
<template>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button>
        Start
      </ion-button>
    </ion-buttons>
    <ion-title>Start / End Buttons</ion-title>
    <ion-buttons slot="end">
      <ion-button>
        End
      </ion-button>
    </ion-buttons>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="secondary">
      <ion-button>
        Secondary
      </ion-button>
    </ion-buttons>
    <ion-buttons slot="primary">
      <ion-button>
        Primary
      </ion-button>
    </ion-buttons>
    <ion-title>Primary / Secondary Buttons</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="secondary">
      <ion-button>
        <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
      </ion-button>
      <ion-button>
        <ion-icon slot="icon-only" :icon="search"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-buttons slot="primary">
      <ion-button>
        <ion-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title>Icon Buttons</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="secondary">
      <ion-button fill="solid">
        <ion-icon slot="start" :icon="personCircle"></ion-icon>
        Contact
      </ion-button>
    </ion-buttons>
    <ion-buttons slot="primary">
      <ion-button fill="solid">
        Help
        <ion-icon slot="end" :icon="helpCircle"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title>Solid Buttons</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="secondary">
      <ion-button fill="outline">
        <ion-icon slot="start" :icon="star"></ion-icon>
        Star
      </ion-button>
    </ion-buttons>
    <ion-buttons slot="primary">
      <ion-button fill="outline">
        Edit
        <ion-icon slot="end" :icon="create"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title>Outline Buttons</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button default-href="#"></ion-back-button>
    </ion-buttons>
    <ion-title>Back Button</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button :auto-hide="false"></ion-menu-button>
    </ion-buttons>
    <ion-title>Menu Button</ion-title>
  </ion-toolbar>
</template>

<script lang="ts">
  import { IonBackButton, IonButton, IonButtons, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/vue';
  import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonBackButton, IonButton, IonButtons, IonIcon, IonMenuButton, IonTitle, IonToolbar },
    setup() {
      return { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star };
    },
  });
</script>
```
