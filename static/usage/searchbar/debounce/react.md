```tsx
import React from 'react';
import { IonItem, IonList, IonSearchbar } from '@ionic/react';

function Example() {
  const handleChange = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    const items = Array.from(document.querySelector('ion-list')!.children) as HTMLElement[];

    items.forEach((item) => {
      const shouldShow = item.textContent!.toLowerCase().indexOf(query) > -1;
      item.style.display = shouldShow ? 'block' : 'none';
    });
  }

  return (
    <>
      <IonSearchbar debounce={1000} onIonChange={(ev) => handleChange(ev)}></IonSearchbar>

      <IonList>
        <IonItem>Amsterdam</IonItem>
        <IonItem>Buenos Aires</IonItem>
        <IonItem>Cairo</IonItem>
        <IonItem>Geneva</IonItem>
        <IonItem>Hong Kong</IonItem>
        <IonItem>Istanbul</IonItem>
        <IonItem>London</IonItem>
        <IonItem>Madrid</IonItem>
        <IonItem>New York</IonItem>
        <IonItem>Panama City</IonItem>
      </IonList>
    </>
  );
}
export default Example;
```
