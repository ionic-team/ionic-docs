```vue
<template>
  <ion-list>
    <ion-item v-for="selectInterface in selectInterfaces" :key="selectInterface">
      <ion-select
        :label="formatInterfaceLabel(selectInterface)"
        placeholder="Select one"
        :interface="selectInterface"
        :interface-options="interfaceOptions"
      >
        <ion-select-option value="airplane" description="Carry-on · Window seat">
          <ion-icon slot="start" size="large" aria-hidden="true" :icon="airplane"></ion-icon>
          <span class="option-title">Flight</span>
          <span class="option-subtitle">2h 15m · Nonstop</span>
          <ion-badge slot="end" color="tertiary">$279</ion-badge>
        </ion-select-option>
        <ion-select-option value="bus" description="Bike rack · Wi-Fi">
          <ion-icon slot="start" size="large" aria-hidden="true" :icon="bus"></ion-icon>
          <span class="option-title">Bus</span>
          <span class="option-subtitle">6h 40m · 1 transfer</span>
          <ion-badge slot="end" color="tertiary">$39</ion-badge>
        </ion-select-option>
        <ion-select-option value="car" description="Unlimited miles · GPS">
          <ion-icon slot="start" size="large" aria-hidden="true" :icon="car"></ion-icon>
          <span class="option-title">Rental Car</span>
          <span class="option-subtitle">5h 10m · Flexible route</span>
          <ion-badge slot="end" color="tertiary">$92</ion-badge>
        </ion-select-option>
        <ion-select-option value="train" description="Reserved seat · Wi-Fi">
          <ion-icon slot="start" size="large" aria-hidden="true" :icon="train"></ion-icon>
          <span class="option-title">Train</span>
          <span class="option-subtitle">4h 55m · Direct</span>
          <ion-badge slot="end" color="tertiary">$64</ion-badge>
        </ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
import { IonBadge, IonIcon, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';
import { airplane, bus, car, train } from 'ionicons/icons';

const selectInterfaces = ['alert', 'action-sheet', 'modal', 'popover'];

/* The interfaceOptions property is for demonstration purposes only. */
/* It is not required for the rich options to work. */
const interfaceOptions = { header: 'Travel mode' };

const formatInterfaceLabel = (selectInterface: string) =>
  selectInterface
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
</script>

<style>
/* -----------------------------------------------------*/
/* These styles are for demonstration purposes only.    */
/* They are not required for the rich options to work.  */
/* -----------------------------------------------------*/

/**
* All Interfaces
* ------------------------------------------------
* Override the flex styles so that the title and
* subtitle stack vertically.
*/
.select-option-content div.alert-radio-label-text,
.select-option-content span.action-sheet-button-label-text,
.select-option-content div.select-option-label-text {
  flex-direction: column;
  align-items: start;
  gap: 5px;
}

/* Action Sheet Interface */
ion-action-sheet .select-option-description {
  text-align: start;
}

/* Alert Interface */
ion-alert.select-alert {
  --min-width: 350px;
}

/* Modal, Popover Interfaces */
ion-popover.select-popover ion-list ion-radio.in-item::part(label),
ion-modal.select-modal ion-list ion-radio.in-item::part(label) {
  margin-top: 10px;
  margin-bottom: 10px;
}

/* Custom Select Option Title */
.select-option-content .option-title {
  font-size: 1rem;
  font-weight: 600;
}

/* Custom Select Option Subtitle */
.select-option-content .option-subtitle {
  font-size: 0.8125rem;
  font-weight: 500;
}
</style>
```
