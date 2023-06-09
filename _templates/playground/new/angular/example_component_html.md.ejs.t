---
# this file only gets generated if `css` (from the command line prompt) is true
# otherwise, the `angular.md` file is generated
to: "<%= css ? `static/usage/v7/${name.replace('ion-', '')}/${path}/angular/example_component_html.md` : null %>"
---
```html
<<%= name %>></<%= name %>>
```
