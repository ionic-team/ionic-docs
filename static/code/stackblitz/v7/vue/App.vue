<template>
  <ion-app>
    <Example />
  </ion-app>
</template>

<script lang="ts">
import { IonApp } from '@ionic/vue';

import { defineComponent } from 'vue';

import Example from './components/Example.vue';

export default defineComponent({
  name: 'App',
  components: { IonApp, Example },
});
</script>
