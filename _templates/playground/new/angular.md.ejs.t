---
# this file only gets generated if `css` (from the command line prompt) is false
# otherwise, the `angular` directory is generated
to: "<%= css ? null : `static/usage/v${version}/${name.replace('ion-', '')}/${path}/angular.md` %>"
---
```html
<<%= name %>></<%= name %>>
```
