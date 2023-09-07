---
arbitrary: <% pascalComponent = h.changeCase.pascal(component) %>
to: "<%= `static/usage/v${version}/${name}/${path}/vue.md` %>"
---
```html
<template>
  <<%= component %>></<%= component %>>
</template>

<script lang="ts" setup>
  import { <%= pascalComponent %> } from '@ionic/vue';
</script>
<% if (css){ -%>

<style scoped>
  <%= component %> {
    /* styles go here */
  }
</style>
<% } -%>
```
