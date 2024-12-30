---
arbitrary: <% pascalComponent = h.changeCase.pascal(component) %>
to: "<%= `static/usage/v${version}/${name}/${path}/angular/example_component_ts.md` %>"
---
```ts
import { Component } from '@angular/core';
import { <%= pascalComponent %> } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
<% if (css){ -%>
  styleUrls: ['./example.component.css'],
<% } -%>
  imports: [<%= pascalComponent %>],
})
export class ExampleComponent {}
```
