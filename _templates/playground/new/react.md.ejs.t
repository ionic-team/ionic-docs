---
arbitrary: <% pascalComponent = h.changeCase.pascal(component) %>
# this file's location depends on whether or not the css option is selected via the prompt
to: "<%= `static/usage/v${version}/${name}/${path}/${css ? 'react/main_tsx.md' : 'react.md'}` %>"
---
```tsx
import React from 'react';
import { <%= pascalComponent %> } from '@ionic/react';<% if (css){ %>

import './main.css';<% } %>

function Example() {
  return (
    <>
      <<%= pascalComponent %>></<%= pascalComponent %>>
    </>
  );
}
export default Example;
```
