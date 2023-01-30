```tsx
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import PageOne from './page-one';
import PageTwo from './page-two';

function Example() {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/one" component={PageOne} />
        <Route path="/two" component={PageTwo} />

        <Redirect exact from="/" to="/two" />
      </IonRouterOutlet>
    </IonReactRouter>
  )
}
export default Example;
```
