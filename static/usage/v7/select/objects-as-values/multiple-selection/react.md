```tsx
import React, { useState } from 'react';
import { IonItem, IonList, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';

interface Food {
  id: number;
  name: string;
  type: string;
}

const foods: Food[] = [
  {
    id: 1,
    name: 'Apples',
    type: 'fruit',
  },
  {
    id: 2,
    name: 'Carrots',
    type: 'vegetable',
  },
  {
    id: 3,
    name: 'Cupcakes',
    type: 'dessert',
  },
];

const compareWith = (o1: Food, o2: Food) => {
  if (!o1 || !o2) {
    return o1 === o2;
  }

  if (Array.isArray(o2)) {
    return o2.some((o) => o.id === o1.id);
  }

  return o1.id === o2.id;
};

function Example() {
  const [currentFood, setCurrentFood] = useState('');

  return (
    <IonList>
      <IonItem>
        <IonSelect
          placeholder="Select food"
          compareWith={compareWith}
          onIonChange={(ev) => setCurrentFood(JSON.stringify(ev.detail.value))}
          multiple={true}
        >
          {foods.map((food) => (
            <IonSelectOption key={food.id} value={food}>
              {food.name}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
      <IonItem lines="none">
        <IonLabel>Current food: {currentFood}</IonLabel>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
