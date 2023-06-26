---
arbitrary: <% pascalName = h.changeCase.pascal(name); componentName = h.changeCase.pascal(path.split('/').pop()) %>
to: "<%= `static/usage/v${version}/${name.replace('ion-', '')}/${path}/vue.md` %>"
sh: "echo `\nGeneration complete! To use this new component in a docs markdown file, include\nthe following:\n\n## <%= componentName %>\n\nimport <%= componentName %> from '@site/static/usage/v7/<%=name.replace('ion-', '') %>/<%= path %>/index.md';\n\n<<%= componentName %> />\n`"
---
```html
<template>
  <<%= name %>></<%= name %>>
</template>

<script lang="ts">
  import { <%= pascalName %> } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      <%= pascalName %>,
    },
  });
</script><% if (css){ %>

<style scoped>
  <%= name %> {
    /* styles go here */
  }
</style><% } %>
```
