---
# this file only gets generated if `css` (from the command line prompt) is true
to: "<%= css ? `static/usage/v${version}/${name.replace('ion-', '')}/${path}/react/main_css.md` : null %>"
---
```css
<%= name %> {
  /* styles go here */
}
```
