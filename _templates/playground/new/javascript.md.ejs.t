---
to: "<%= `static/usage/v${version}/${name.replace('ion-', '')}/${path}/javascript.md` %>"
---
```html
<<%= name %>></<%= name %>>
<% if (css){ -%>

<style>
  <%= name %> {
    /* styles go here */
  }
</style>
<% } -%>
```
