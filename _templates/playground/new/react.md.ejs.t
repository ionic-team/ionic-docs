---
arbitrary: <% pascalName = h.changeCase.pascal(name) %>
to: static/usage/v7/<%= name.replace('ion-', '') %>/<%= path %>/react.md
---
```tsx
import React from 'react';
import { <%= pascalName %> } from '@ionic/react';

function Example() {
  return (
    <>
      <<%= pascalName %>></<%= pascalName %>>
    </>
  );
}
export default Example;
```

