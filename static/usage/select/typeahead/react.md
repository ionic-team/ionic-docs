```tsx
import React, { useRef, useState } from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonModal, IonTitle, IonSearchbar, IonToolbar } from '@ionic/react';

interface Fruit {
  text: string;
  value: string;
}

const fruits: Fruit[] = [
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
  { text: 'Strawberry', value: 'strawberry' }
];

function Example() {
  const [selectedFruit, setSelectedFruit] = useState('None');
  const [filteredFruits, setFilteredFruits] = useState([...fruits]);
  const modal = useRef<HTMLIonModalElement>(null);
  
   /**
    * Commit an item and dismiss the modal.
    */
    const selectFruit = (fruit: Fruit) => {
      modal.current?.dismiss(fruit);
    }

    /**
     * When the modal is about to dismiss,
     * update the parent view with the selected item.
     */
    const modalWillDismiss = (ev: CustomEvent) => {
      const { data } = ev.detail;

      if (data !== undefined) {
        setSelectedFruit(data.text);
      }
    }
    
    /**
     * Reset the state of the modal
     * once it is fully dismissed.
     */ 
    const modalDidDismiss = () => {
      setFilteredFruits([...fruits]);
    }

    const dismissModal = () => {
      modal.current?.dismiss();
    }
  
  const filterList = (searchQuery: string | null | undefined) => {
    /**
     * If no search query is defined,
     * return all options.
     */
    if (searchQuery == null) {
      setFilteredFruits([...fruits]);
    } else {
      /**
       * Otherwise, normalize the search
       * query and check to see which items
       * contain the search query as a substring.
       */
      const normalizedQuery = searchQuery.toLowerCase(); 
      setFilteredFruits(fruits.filter(fruit => {
        return fruit.value.includes(normalizedQuery);
      }));
    }
  }
  
  return (
    <>
      <IonContent color="light">
        <IonList inset={true}>
          <IonItem button={true} detail={false} id="select-fruit">
            <IonLabel>Favorite Fruit</IonLabel>
            <div slot="end" id="selected-fruit">{ selectedFruit }</div>
          </IonItem>
        </IonList>
      </IonContent>
      
      <IonModal
        ref={modal}
        trigger="select-fruit"
        onWillDismiss={(ev) => modalWillDismiss(ev)}
        onDidDismiss={() => modalDidDismiss()}
      >
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => dismissModal()}>Cancel</IonButton>
            </IonButtons>
            <IonTitle>Favorite Fruit</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar onIonInput={(ev) => filterList(ev.target.value)}></IonSearchbar>
          </IonToolbar>
        </IonHeader>
        <IonContent color="light" class="ion-padding">
          <IonList id="modal-list" inset={true}>
            {filteredFruits.map((fruit: Fruit) => (
              <IonItem
                key={fruit.value}
                button={true} 
                detail={false} 
                onClick={() => selectFruit(fruit)}
              >
                <IonLabel>{fruit.text}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonModal>
    </>
  );
}
export default Example;
```
