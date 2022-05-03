```html
<template>
  <ion-list>        
    <ion-item>
      <ion-label>Alert</ion-label>
      <ion-select :interfaceOptions="customAlertOptions" interface="alert" placeholder="Select One">
        <ion-select-option value="bacon">Bacon</ion-select-option>
        <ion-select-option value="mushrooms">Mushrooms</ion-select-option>
        <ion-select-option value="onions">Onions</ion-select-option>
        <ion-select-option value="pepperoni">Pepperoni</ion-select-option>
        <ion-select-option value="pineapple">Pineapple</ion-select-option>
        <ion-select-option value="sausage">Sausage</ion-select-option>
      </ion-select>
    </ion-item>
        
    <ion-item>
      <ion-label>Popover</ion-label>
      <ion-select :interfaceOptions="customPopoverOptions" interface="popover" placeholder="Select One">
        <ion-select-option value="brown">Brown</ion-select-option>
        <ion-select-option value="blonde">Blonde</ion-select-option>
        <ion-select-option value="black">Black</ion-select-option>
        <ion-select-option value="red">Red</ion-select-option>
      </ion-select>
    </ion-item>
        
    <ion-item>
      <ion-label>Action Sheet</ion-label>
      <ion-select :interfaceOptions="customActionSheetOptions" interface="action-sheet" placeholder="Select One">
        <ion-select-option value="red">Red</ion-select-option>
        <ion-select-option value="purple">Purple</ion-select-option>
        <ion-select-option value="yellow">Yellow</ion-select-option>
        <ion-select-option value="orange">Orange</ion-select-option>
        <ion-select-option value="green">Green</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonSelect, IonSelectOption },
    setup() {
      const customAlertOptions = {
        header: 'Pizza Toppings',
        subHeader: 'Select your favorite topping',
        message: 'Choose only one',
        translucent: true
      };

      const customPopoverOptions = {
        header: 'Hair Color',
        subHeader: 'Select your hair color',
        message: 'Only select your dominant hair color'
      };

      const customActionSheetOptions = {
        header: 'Colors',
        subHeader: 'Select your favorite color'
      };

      return {
        customAlertOptions,
        customPopoverOptions,
        customActionSheetOptions
      }
    }
  });
</script>
```
