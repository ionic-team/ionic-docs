---
arbitrary: <% pascalName = h.changeCase.pascal(name) %>
# this file's location depends on whether or not the css option is selected via the prompt
to: "<%= `static/usage/v${version}/${name.replace('ion-', '')}/${path}/${css ? 'react/main_tsx.md' : 'react.md'}` %>"
---
```tsx
import React from 'react';
import { <%= pascalName %> } from '@ionic/react';

function Example() {
  return (
    <<%= pascalName %>></<%= pascalName %>>
  );
}
export default Example;
```

