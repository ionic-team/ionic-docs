---
# this file's location depends on whether or not the css option is selected via the prompt
to: "<%= `static/usage/v${version}/${name.replace('ion-', '')}/${path}/${css ? 'angular/example_component_html.md' : 'angular.md'}` %>"
---
```html
<<%= name %>></<%= name %>>
```
