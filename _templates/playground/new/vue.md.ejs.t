---
to: static/usage/v7/<%= name.replace('ion-', '') %>/<%= path %>/vue.md
---
```html
<template>
  <<%= name %>>
  </<%= name %>>
</template>

<script lang="ts">
  import { <%= h.changeCase.pascal(name) %> } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      <%= h.changeCase.pascal(name) %>,
    },
  });
</script>
```
