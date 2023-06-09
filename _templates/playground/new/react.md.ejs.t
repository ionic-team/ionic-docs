---
to: static/usage/v7/<%= name.replace('ion-', '') %>/<%= path %>/react.md
---
```tsx
import React from 'react';
import { <%= h.changeCase.pascal(name) %> } from '@ionic/react';

function Example() {
  return (
    <>
      <<%= h.changeCase.pascal(name) %>></<%= h.changeCase.pascal(name) %>>
    </>
  );
}
export default Example;
```

