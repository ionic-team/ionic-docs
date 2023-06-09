---
# this file only gets generated if `css` (from the command line prompt) is true
# otherwise, the `react.md` file is generated
to: "<%= css ? `static/usage/v7/${name.replace('ion-', '')}/${path}/react/main_css.md` : null %>"
---
```css
<%= name %> {
  /* styles go here */
}
```
