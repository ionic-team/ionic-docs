```tsx
import React from 'react';
import { IonItem, IonTextarea } from '@ionic/react';
function Example() {
  return (
    <IonItem>
      <IonTextarea
        placeholder="Type something here"
        autoGrow={true}
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus sem, auctor accumsan egestas sed, venenatis at ex. Nam consequat ex odio, suscipit rhoncus orci dictum eget. Aenean sit amet ligula varius felis facilisis lacinia nec volutpat nulla. Duis ullamcorper sit amet turpis sed blandit. Integer pretium massa eu faucibus interdum."
      ></IonTextarea>
    </IonItem>
  );
}
export default Example;
```
