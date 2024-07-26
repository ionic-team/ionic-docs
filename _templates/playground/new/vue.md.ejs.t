---
arbitrary: <% pascalComponent = h.changeCase.pascal(component) %>
to: "<%= `static/usage/v${version}/${name}/${path}/vue.md` %>"
---
```html
<template>
  <<%= component %>></<%= component %>>
</template>

<script lang="ts">
  import { <%= pascalComponent %> } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      <%= pascalComponent %>,
    },
  });
</script>
<% if (css){ -%>

<style scoped>
  <%= component %> {
    /* styles go here */
  }
</style>
<% } -%>
```
