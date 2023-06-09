---
arbitrary: <% pascalName = h.changeCase.pascal(name) %>
# this file only gets generated if `css` (from the command line prompt) is true
# otherwise, the `react.md` file is generated
to: "<%= css ? `static/usage/v7/${name.replace('ion-', '')}/${path}/react/main_tsx.md` : null %>"
---
```tsx
import React from 'react';
import { <%= pascalName %> } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <<%= pascalName %>></<%= pascalName %>>
    </>
  );
}
export default Example;
```
