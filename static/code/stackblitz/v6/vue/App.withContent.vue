<template>
  <ion-app>
    <ion-content class="ion-padding">
      <Example />
    </ion-content>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonContent } from '@ionic/vue';

import { defineComponent } from 'vue';

import Example from './components/Example.vue';

export default defineComponent({
  name: 'App',
  components: { IonApp, IonContent, Example },
});
</script>
