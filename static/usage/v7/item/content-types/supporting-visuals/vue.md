```html
<template>
  <ion-list>
    <ion-item>
      <ion-icon aria-hidden="true" :icon="airplane" slot="start"></ion-icon>
      <ion-label>Airplane Mode</ion-label>
    </ion-item>
    <ion-item>
      <ion-icon aria-hidden="true" :icon="wifi" slot="start"></ion-icon>
      <ion-label>Wi-Fi</ion-label>
    </ion-item>
    <ion-item>
      <ion-icon aria-hidden="true" :icon="bluetooth" slot="start"></ion-icon>
      <ion-label>Bluetooth</ion-label>
    </ion-item>
    <ion-item>
      <ion-icon aria-hidden="true" :icon="call" slot="start"></ion-icon>
      <ion-label>Cellular</ion-label>
    </ion-item>
  </ion-list>

  <ion-list>
    <ion-item>
      <ion-avatar aria-hidden="true" slot="start">
        <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </ion-avatar>
      <ion-label>Huey</ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar aria-hidden="true" slot="start">
        <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </ion-avatar>
      <ion-label>Dewey</ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar aria-hidden="true" slot="start">
        <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </ion-avatar>
      <ion-label>Louie</ion-label>
    </ion-item>
    <ion-item>
      <ion-avatar aria-hidden="true" slot="start">
        <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </ion-avatar>
      <ion-label>Fooie</ion-label>
    </ion-item>
  </ion-list>
</template>

<script lang="ts" setup>
  import { IonAvatar, IonItem, IonLabel, IonList, IonIcon } from '@ionic/vue';
  import { airplane, bluetooth, call, wifi } from 'ionicons/icons';
</script>
```
