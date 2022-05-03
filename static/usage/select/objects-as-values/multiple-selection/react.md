```tsx
import React, { useState } from 'react';
import { IonLabel, IonSelect, IonSelectOption } from '@ionic/react';

const foods = [
  {
    id: 1,
    name: "Apples",
    type: "fruit"
  },
  {
    id: 2,
    name: "Carrots",
    type: "vegetable"
  },
  {
    id: 3,
    name: "Cupcakes",
    type: "dessert"
  }
];

const compareWith = (o1, o2) => {
  if(!o1 || !o2) {
    return o1 === o2;
  }

  if(Array.isArray(o2)) {
    return o2.some((o) => o.id === o1.id);
  }

  return o1.id === o2.id;
};

function Example() {
  const [currentFood, setCurrentFood] = useState("[]");

  return (
    <>
      <IonSelect
        placeholder="Select food"
        compareWith={compareWith}
        onIonChange={ev => setCurrentFood(JSON.stringify(ev.detail.value))}
        multiple={true}
      >
        {foods.map(food => (
          <IonSelectOption key={food.id} value={food}>{food.name}</IonSelectOption>
        ))}
      </IonSelect>
      <IonLabel class="ion-padding">Current food: {currentFood}</IonLabel>
    </>
  );
}
export default Example;
```
