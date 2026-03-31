```tsx
import React from 'react';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Navigate } from 'react-router-dom';
import { gridOutline, settingsOutline } from 'ionicons/icons';
import DashboardPage from './pages/DashboardPage';
import ItemDetailPage from './pages/ItemDetailPage';
import SettingsPage from './pages/SettingsPage';

const Example: React.FC = () => (
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/:id" element={<ItemDetailPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="dashboard" href="/dashboard">
          <IonIcon icon={gridOutline} />
          <IonLabel>Dashboard</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/settings">
          <IonIcon icon={settingsOutline} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
);

export default Example;
```
