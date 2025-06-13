```tsx
import React, { useState } from 'react';
import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ReorderEndCustomEvent } from '@ionic/react';

function Example() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  function handleReorder(event: ReorderEndCustomEvent) {
    // Before complete is called with the items they will remain in the
    // order before the drag
    console.log('Before complete', items);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. Update the items variable to the
    // new order of items
    setItems(event.detail.complete(items));

    // After complete is called the items will be in the new order
    console.log('After complete', items);
  }

  return (
    <IonList>
      {/* The reorder gesture is disabled by default, enable it to drag and drop items */}
      <IonReorderGroup disabled={false} onIonReorderEnd={handleReorder}>
        {items.map((item) => (
          <IonItem key={item}>
            <IonLabel>Item {item}</IonLabel>
            <IonReorder slot="end"></IonReorder>
          </IonItem>
        ))}
      </IonReorderGroup>
    </IonList>
  );
}
export default Example;
```
