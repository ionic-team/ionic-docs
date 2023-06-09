---
to: static/usage/v7/<%= name.replace('ion-', '') %>/<%= path %>/vue.md
---
```html
<template>
  <<%= name %>>
  </<%= name %>>
</template>

<script lang="ts">
  import { <%= h.inflection.camelize(name.replace(/-/g, '_'), false) %> } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      <%= h.inflection.camelize(name.replace(/-/g, '_'), false) %>,
    },
  });
</script>
```
