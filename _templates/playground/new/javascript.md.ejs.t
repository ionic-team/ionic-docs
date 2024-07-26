---
to: "<%= `static/usage/v${version}/${name}/${path}/javascript.md` %>"
---
```html
<<%= component %>></<%= component %>>
<% if (css){ -%>

<style>
  <%= component %> {
    /* styles go here */
  }
</style>
<% } -%>
```
