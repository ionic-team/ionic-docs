```html
<ion-list>
  @for (selectInterface of selectInterfaces; track selectInterface) {
  <ion-item>
    <ion-select
      [label]="formatInterfaceLabel(selectInterface)"
      placeholder="Select one"
      [interface]="selectInterface"
      [interfaceOptions]="interfaceOptions"
    >
      <ion-select-option value="airplane" description="Carry-on · Window seat">
        <ion-icon slot="start" size="large" aria-hidden="true" name="airplane"></ion-icon>
        <span class="option-title">Flight</span>
        <span class="option-subtitle">2h 15m · Nonstop</span>
        <ion-badge slot="end" color="tertiary">$279</ion-badge>
      </ion-select-option>
      <ion-select-option value="bus" description="Bike rack · Wi-Fi">
        <ion-icon slot="start" size="large" aria-hidden="true" name="bus"></ion-icon>
        <span class="option-title">Bus</span>
        <span class="option-subtitle">6h 40m · 1 transfer</span>
        <ion-badge slot="end" color="tertiary">$39</ion-badge>
      </ion-select-option>
      <ion-select-option value="car" description="Unlimited miles · GPS">
        <ion-icon slot="start" size="large" aria-hidden="true" name="car"></ion-icon>
        <span class="option-title">Rental Car</span>
        <span class="option-subtitle">5h 10m · Flexible route</span>
        <ion-badge slot="end" color="tertiary">$92</ion-badge>
      </ion-select-option>
      <ion-select-option value="train" description="Reserved seat · Wi-Fi">
        <ion-icon slot="start" size="large" aria-hidden="true" name="train"></ion-icon>
        <span class="option-title">Train</span>
        <span class="option-subtitle">4h 55m · Direct</span>
        <ion-badge slot="end" color="tertiary">$64</ion-badge>
      </ion-select-option>
    </ion-select>
  </ion-item>
  }
</ion-list>
```
