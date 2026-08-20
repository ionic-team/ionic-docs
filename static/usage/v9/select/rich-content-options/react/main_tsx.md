```tsx
import React from 'react';
import { SelectInterface } from '@ionic/core';
import { IonBadge, IonIcon, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import { airplane, bus, car, train } from 'ionicons/icons';

import './main.css';

const selectInterfaces: SelectInterface[] = ['alert', 'action-sheet', 'modal', 'popover'];

/* The interfaceOptions property is for demonstration purposes only. */
/* It is not required for the rich options to work. */
const interfaceOptions = { header: 'Travel mode' };

const formatInterfaceLabel = (selectInterface: string) =>
  selectInterface
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

function Example() {
  return (
    <IonList>
      {selectInterfaces.map((selectInterface) => (
        <IonItem key={selectInterface}>
          <IonSelect
            label={formatInterfaceLabel(selectInterface)}
            placeholder="Select one"
            interface={selectInterface}
            interfaceOptions={interfaceOptions}
          >
            <IonSelectOption value="airplane" description="Carry-on · Window seat">
              <IonIcon slot="start" size="large" aria-hidden="true" icon={airplane} />
              <span className="option-title">Flight</span>
              <span className="option-subtitle">2h 15m · Nonstop</span>
              <IonBadge slot="end" color="tertiary">
                $279
              </IonBadge>
            </IonSelectOption>
            <IonSelectOption value="bus" description="Bike rack · Wi-Fi">
              <IonIcon slot="start" size="large" aria-hidden="true" icon={bus} />
              <span className="option-title">Bus</span>
              <span className="option-subtitle">6h 40m · 1 transfer</span>
              <IonBadge slot="end" color="tertiary">
                $39
              </IonBadge>
            </IonSelectOption>
            <IonSelectOption value="car" description="Unlimited miles · GPS">
              <IonIcon slot="start" size="large" aria-hidden="true" icon={car} />
              <span className="option-title">Rental Car</span>
              <span className="option-subtitle">5h 10m · Flexible route</span>
              <IonBadge slot="end" color="tertiary">
                $92
              </IonBadge>
            </IonSelectOption>
            <IonSelectOption value="train" description="Reserved seat · Wi-Fi">
              <IonIcon slot="start" size="large" aria-hidden="true" icon={train} />
              <span className="option-title">Train</span>
              <span className="option-subtitle">4h 55m · Direct</span>
              <IonBadge slot="end" color="tertiary">
                $64
              </IonBadge>
            </IonSelectOption>
          </IonSelect>
        </IonItem>
      ))}
    </IonList>
  );
}
export default Example;
```
