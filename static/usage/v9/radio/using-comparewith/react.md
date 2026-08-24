```tsx
import React from 'react';
import { IonItem, IonList, IonRadio, IonRadioGroup } from '@ionic/react';

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
  return o1.id === o2.id;
};

function Example() {
  return (
    <IonList>
      <IonRadioGroup
        compareWith={compareWith}
        onIonChange={(event) => console.log('Current value:', JSON.stringify(event.detail.value))}
      >
        {foods.map((food) => (
          <IonItem>
            <IonRadio key={food.id} value={food}>
              {food.name}
            </IonRadio>
          </IonItem>
        ))}
      </IonRadioGroup>
    </IonList>
  );
}
export default Example;
```
