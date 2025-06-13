```tsx
import React, { useRef } from 'react';
import { IonIcon, IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ReorderEndCustomEvent } from '@ionic/react';
import { caretDown, ellipse, warning } from 'ionicons/icons';

const items = [
  { label: 'Buy groceries', icon: warning, color: 'warning' },
  { label: 'Call the bank', icon: warning, color: 'warning' },
  { label: 'Finish project report', icon: ellipse, color: 'light' },
  { label: 'Book flight tickets', icon: ellipse, color: 'light' },
  { label: 'Read a book', icon: caretDown, color: 'secondary' },
];

function Example() {
  const iconsRef = useRef<(HTMLIonIconElement | null)[]>([]);

  function handleReorderStart() {
    // Hide the icons when the reorder starts
    iconsRef.current.forEach((icon) => {
      if (icon) icon.style.opacity = '0';
    });
  }

  function handleReorderEnd(event: ReorderEndCustomEvent) {
    // Show the icons again
    iconsRef.current.forEach((icon) => {
      if (icon) icon.style.opacity = '1';
    });

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group.
    event.detail.complete();
  }

  return (
    <IonList>
      {/* The reorder gesture is disabled by default, enable it to drag and drop items */}
      <IonReorderGroup disabled={false} onIonReorderStart={handleReorderStart} onIonReorderEnd={handleReorderEnd}>
        {items.map((item, i) => (
          <IonItem key={item.label}>
            <IonLabel>{item.label}</IonLabel>
            <IonIcon
              icon={item.icon}
              color={item.color}
              slot="end"
              ref={(el) => {
                iconsRef.current[i] = el;
              }}
            />
            <IonReorder slot="end" />
          </IonItem>
        ))}
      </IonReorderGroup>
    </IonList>
  );
}

export default Example;
```
