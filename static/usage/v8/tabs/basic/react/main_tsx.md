```tsx
import React from 'react';
import {
  IonTabs,
  IonTab,
  IonToolbar,
  IonTabBar,
  IonTabButton,
  IonHeader,
  IonTitle,
  IonContent,
  IonIcon,
} from '@ionic/react';

import { playCircle, radio, library, search } from 'ionicons/icons';

import './main.css';

function Example() {
  return (
    <IonTabs>
      <IonTab tab="home">
        <div id="home-page">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Listen now</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className="example-content">Listen now content</div>
          </IonContent>
        </div>
      </IonTab>
      <IonTab tab="radio">
        <div id="radio-page">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Radio</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className="example-content">Radio content</div>
          </IonContent>
        </div>
      </IonTab>
      <IonTab tab="library">
        <div id="library-page">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Library</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className="example-content">Library content</div>
          </IonContent>
        </div>
      </IonTab>
      <IonTab tab="search">
        <div id="search-page">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Search</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div className="example-content">Search content</div>
          </IonContent>
        </div>
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
