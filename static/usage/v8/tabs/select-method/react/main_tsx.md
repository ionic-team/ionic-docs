```tsx
import React, { useRef } from 'react';
import {
  IonButton,
  IonContent,
  IonIcon,
  IonHeader,
  IonTab,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
  IonPage,
} from '@ionic/react';

import { playCircle, radio, library, search } from 'ionicons/icons';

import './main.css';

function Example() {
  const selectRadio = () => {
    const tabs = document.querySelector('ion-tabs');
    tabs?.select('radio');
  };

  return (
    <IonTabs>
      <IonTab tab="home">
        <IonPage id="home-page">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Listen now</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className="example-content">
              Listen now content
              <IonButton onClick={selectRadio}>Go to Radio</IonButton>
            </div>
          </IonContent>
        </IonPage>
      </IonTab>
      <IonTab tab="radio">
        <IonPage id="radio-page">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Radio</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className="example-content">Radio content</div>
          </IonContent>
        </IonPage>
      </IonTab>
      <IonTab tab="library">
        <IonPage id="library-page">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Library</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className="example-content">Library content</div>
          </IonContent>
        </IonPage>
      </IonTab>
      <IonTab tab="search">
        <IonPage id="search-page">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Search</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className="example-content">Search content</div>
          </IonContent>
        </IonPage>
      </IonTab>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home">
          <IonIcon icon={playCircle} />
          Listen Now
        </IonTabButton>
        <IonTabButton tab="radio">
          <IonIcon icon={radio} />
          Radio
        </IonTabButton>
        <IonTabButton tab="library">
          <IonIcon icon={library} />
          Library
        </IonTabButton>
        <IonTabButton tab="search">
          <IonIcon icon={search} />
          Search
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}
export default Example;
```
