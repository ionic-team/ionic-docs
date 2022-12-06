```ts
import { defineCustomElements } from '@ionic/core/loader';

import { createAnimation } from '@ionic/core';

defineCustomElements();

(window as any).createAnimation = createAnimation;
```
