```tsx
import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
} from '@ionic/react';

function Example() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const newItems = [];
    for (let i = 1; i < 51; i++) {
      newItems.push(`Item ${items.length + i}`);
    }
    setItems([...items, ...newItems]);
  }, []);

  return (
    <IonContent>
      <IonList>
        {items.map((item, index) => (
          <IonItem>
            <IonAvatar slot="start">
              <img src={'https://loremflickr.com/80/80/person?random=' + index} alt="avatar" />
            </IonAvatar>
            <IonLabel>{item}</IonLabel>
          </IonItem>
        ))}
      </IonList>
      <IonInfiniteScroll>
        <IonInfiniteScrollContent loadingText="Please wait..." loadingSpinner="bubbles"></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </IonContent>
  );
}
export default Example;
```
