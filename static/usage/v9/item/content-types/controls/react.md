```tsx
import React from 'react';
import { IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <IonList inset={true}>
          <IonItem>
            <IonCheckbox slot="start" aria-label="Toggle task completion"></IonCheckbox>
            <IonInput aria-label="Task name" value="Get eggs"></IonInput>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" aria-label="Toggle task completion"></IonCheckbox>
            <IonInput aria-label="Task name" value="Get milk"></IonInput>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" aria-label="Toggle task completion"></IonCheckbox>
            <IonInput aria-label="Task name" value="Take out compost"></IonInput>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" aria-label="Toggle task completion"></IonCheckbox>
            <IonInput aria-label="Task name" value="Pick up dry cleaning"></IonInput>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" aria-label="Toggle task completion"></IonCheckbox>
            <IonInput aria-label="Task name" value="Call mom"></IonInput>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" aria-label="Toggle task completion"></IonCheckbox>
            <IonInput aria-label="Task name" value="Order more dog food"></IonInput>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" aria-label="Toggle task completion"></IonCheckbox>
            <IonInput aria-label="Task name" value="Think of new tasks for this demo"></IonInput>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
}
export default Example;
```
