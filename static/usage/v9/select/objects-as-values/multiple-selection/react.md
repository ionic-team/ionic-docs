```tsx
import React from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';

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
  return (
    <IonList>
      <IonItem>
        <IonSelect
          aria-label="Food"
          placeholder="Select food"
          compareWith={compareWith}
          onIonChange={(event) => console.log('Current value:', JSON.stringify(event.detail.value))}
          multiple={true}
        >
          {foods.map((food) => (
            <IonSelectOption key={food.id} value={food}>
              {food.name}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default Example;
```
