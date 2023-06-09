---
arbitrary: <% pascalName = h.changeCase.pascal(name) %>
to: static/usage/v7/<%= name.replace('ion-', '') %>/<%= path %>/vue.md
---
```html
<template>
  <<%= name %>>
  </<%= name %>>
</template>

<script lang="ts">
  import { <%= pascalName %> } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      <%= pascalName %>,
    },
  });
</script>
```
