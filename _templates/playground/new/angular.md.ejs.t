---
# this file's location depends on whether or not the css option or angular_ts option is selected via the prompt
to: "<%= `static/usage/v${version}/${name.replace('ion-', '')}/${path}/${(css || angular_ts) ? 'angular/example_component_html.md' : 'angular.md'}` %>"
---
```html
<<%= name %>></<%= name %>>
```
