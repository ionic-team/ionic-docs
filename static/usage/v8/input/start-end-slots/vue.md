```html
<template>
  <ion-list>
    <ion-item>
      <ion-input label-placement="stacked" label="Email" placeholder="email@domain.com">
        <ion-icon slot="start" :icon="lockClosed" aria-hidden="true"></ion-icon>
        <ion-button fill="clear" slot="end" aria-label="Show/hide">
          <ion-icon slot="icon-only" :icon="eye" aria-hidden="true"></ion-icon>
        </ion-button>
      </ion-input>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonButton, IonIcon, IonInput, IonItem, IonList } from '@ionic/vue';
  import { eye, lockClosed } from 'ionicons/icons';
</script>
```
