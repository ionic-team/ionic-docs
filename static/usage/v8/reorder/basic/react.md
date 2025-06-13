```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ReorderEndCustomEvent } from '@ionic/react';

function Example() {
  function handleReorder(event: ReorderEndCustomEvent) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }

  return (
    <IonList>
      {/* The reorder gesture is disabled by default, enable it to drag and drop items */}
      <IonReorderGroup disabled={false} onIonReorderEnd={handleReorder}>
        <IonItem>
          <IonLabel>Item 1</IonLabel>
          <IonReorder slot="end"></IonReorder>
        </IonItem>

        <IonItem>
          <IonLabel>Item 2</IonLabel>
          <IonReorder slot="end"></IonReorder>
        </IonItem>

        <IonItem>
          <IonLabel>Item 3</IonLabel>
          <IonReorder slot="end"></IonReorder>
        </IonItem>

        <IonItem>
          <IonLabel>Item 4</IonLabel>
          <IonReorder slot="end"></IonReorder>
        </IonItem>

        <IonItem>
          <IonLabel>Item 5</IonLabel>
          <IonReorder slot="end"></IonReorder>
        </IonItem>
      </IonReorderGroup>
    </IonList>
  );
}
export default Example;
```
