---
# this file only gets generated if `angular_ts` (from the command line prompt) is true
to: "<%= angular_ts ? `static/usage/v${version}/${name}/${path}/angular/example_component_ts.md` : null %>"
---
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
<% if (css){ -%>
  styleUrls: ['./example.component.css'],
<% } -%>
})
export class ExampleComponent {
}
```
