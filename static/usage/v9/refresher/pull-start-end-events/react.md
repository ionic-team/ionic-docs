```tsx
import React, { useState } from 'react';
import {
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  IonRefresher,
  IonRefresherContent,
  RefresherCustomEvent,
  RefresherPullEndCustomEvent,
} from '@ionic/react';

interface TodoItem {
  label: string;
  checked: boolean;
  disabled: boolean;
}

function Example() {
  const [items, setItems] = useState<TodoItem[]>([
    { label: 'Finalize Q1 budget proposal', checked: false, disabled: false },
    { label: 'Review design mockups', checked: true, disabled: false },
    { label: 'Sync with engineering on API docs', checked: true, disabled: false },
    { label: 'Approve PTO requests for March', checked: false, disabled: false },
    { label: 'Draft monthly newsletter', checked: false, disabled: false },
  ]);

  function handlePullStart() {
    console.log('Pull started');

    // Disable the checkboxes when the pull starts
    setItems((prev) => prev.map((item) => ({ ...item, disabled: true })));
  }

  function handlePullEnd(event: RefresherPullEndCustomEvent) {
    console.log('Pull ended with reason: "' + event.detail.reason + '"');

    // Enable the checkboxes when the pull ends
    setItems((prev) => prev.map((item) => ({ ...item, disabled: false })));
  }

  function handleRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
      console.log('Refresh completed');
    }, 2000);
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pull to Refresh</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-padding">
        <IonRefresher
          id="refresher"
          slot="fixed"
          onIonPullStart={handlePullStart}
          onIonPullEnd={handlePullEnd}
          onIonRefresh={handleRefresh}
        >
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <p>Pull this content down to trigger the refresh.</p>

        <IonList lines="full">
          {items.map((item: TodoItem) => (
            <IonItem key={item.label}>
              <IonCheckbox slot="start" checked={item.checked} disabled={item.disabled}></IonCheckbox>
              <IonLabel>{item.label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </>
  );
}

export default Example;
```
