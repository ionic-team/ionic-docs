---
# this file only gets generated if `css` (from the command line prompt) is true
# otherwise, the `angular.md` file is generated
to: "<%= css ? `static/usage/v${version}/${name.replace('ion-', '')}/${path}/angular/example_component_css.md` : null %>"
---
```css
<%= name %> {
  /* styles go here */
}
```
