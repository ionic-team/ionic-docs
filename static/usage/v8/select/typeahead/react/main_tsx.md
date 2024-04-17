```tsx
import React, { useRef, useState } from 'react';
import { IonContent, IonItem, IonLabel, IonList, IonModal } from '@ionic/react';
import AppTypeahead from './AppTypeahead';

import type { Item } from './types';

const fruits: Item[] = [
  { text: 'Apple', value: 'apple' },
  { text: 'Apricot', value: 'apricot' },
  { text: 'Banana', value: 'banana' },
  { text: 'Blackberry', value: 'blackberry' },
  { text: 'Blueberry', value: 'blueberry' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Cranberry', value: 'cranberry' },
  { text: 'Grape', value: 'grape' },
  { text: 'Grapefruit', value: 'grapefruit' },
  { text: 'Guava', value: 'guava' },
  { text: 'Jackfruit', value: 'jackfruit' },
  { text: 'Lime', value: 'lime' },
  { text: 'Mango', value: 'mango' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: 'Passionfruit', value: 'passionfruit' },
  { text: 'Peach', value: 'peach' },
  { text: 'Pear', value: 'pear' },
  { text: 'Plantain', value: 'plantain' },
  { text: 'Plum', value: 'plum' },
  { text: 'Pineapple', value: 'pineapple' },
  { text: 'Pomegranate', value: 'pomegranate' },
  { text: 'Raspberry', value: 'raspberry' },
  { text: 'Strawberry', value: 'strawberry' },
];

function Example() {
  const [selectedFruitsText, setSelectedFruitsText] = useState<string>('0 Items');
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);

  const modal = useRef<HTMLIonModalElement>(null);

  const formatData = (data: string[]) => {
    if (data.length === 1) {
      const fruit = fruits.find((fruit) => fruit.value === data[0])!;
      return fruit.text;
    }

    return `${data.length} items`;
  };

  const fruitSelectionChanged = (fruits: string[]) => {
    setSelectedFruits(fruits);
    setSelectedFruitsText(formatData(fruits));
    modal.current?.dismiss();
  };

  return (
    <>
      <IonContent color="light">
        <IonList inset={true}>
          <IonItem button={true} detail={false} id="select-fruits">
            <IonLabel>Favorite Fruits</IonLabel>
            <div slot="end" id="selected-fruits">
              {selectedFruitsText}
            </div>
          </IonItem>
        </IonList>
      </IonContent>

      <IonModal trigger="select-fruits" ref={modal}>
        <AppTypeahead
          title="Favorite Fruits"
          items={fruits}
          selectedItems={selectedFruits}
          onSelectionCancel={() => modal.current?.dismiss()}
          onSelectionChange={fruitSelectionChanged}
        />
      </IonModal>
    </>
  );
}
export default Example;
```
