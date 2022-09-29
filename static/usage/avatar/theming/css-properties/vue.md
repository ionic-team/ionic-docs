```html
<template>
  <ion-avatar>
    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
  </ion-avatar>
</template>

<script lang="ts">
  import { IonAvatar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonAvatar }
  });
</script>

<style scoped>
  ion-avatar {
    --border-radius: 4px;
  }
</style>
```
