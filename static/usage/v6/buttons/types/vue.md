```html
<template>
  <ion-toolbar>
    <ion-buttons slot="secondary">
      <ion-button size="large">
        Favorite
      </ion-button>
    </ion-buttons>
    <ion-title>Default Buttons</ion-title>
    <ion-buttons slot="primary">
      <ion-button>
        Delete
      </ion-button>
    </ion-buttons>
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
  import { defineComponent } from 'vue';
  import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star } from 'ionicons/icons';

  export default defineComponent({
    components: { IonBackButton, IonButton, IonButtons, IonIcon, IonMenuButton, IonTitle, IonToolbar },
    setup() {
      return { create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star };
    }
  });
</script>
```
