```tsx
import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import HomePage from './pages/HomePage';

function Example() {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Redirect exact path="/" to="/home" />
        {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
        <Route path="/home" render={() => <HomePage />} exact={true} />
      </IonRouterOutlet>
    </IonReactRouter>
  );
}
export default Example;
```
