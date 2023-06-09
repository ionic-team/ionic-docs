---
arbitrary: <% pascalName = h.changeCase.pascal(name) %>
# this file only gets generated if `css` (from the command line prompt) is false
# otherwise, the `react` directory is generated
to: "<%= css ? null : `static/usage/v${version}/${name.replace('ion-', '')}/${path}/react.md` %>"
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

