```html
<template>
  <ion-list>
    <ion-item>
      <ion-select
        class="always-flip"
        :toggle-icon="caretDownSharp"
        interface="popover"
        label="Icon flips on both modes"
        placeholder="Select fruit"
      >
        <ion-select-option value="apples">Apples</ion-select-option>
        <ion-select-option value="oranges">Oranges</ion-select-option>
        <ion-select-option value="bananas">Bananas</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-select
        class="never-flip"
        :toggle-icon="caretDownSharp"
        interface="popover"
        label="Icon never flips"
        placeholder="Select fruit"
      >
        <ion-select-option value="apples">Apples</ion-select-option>
        <ion-select-option value="oranges">Oranges</ion-select-option>
        <ion-select-option value="bananas">Bananas</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';
  import { caretDownSharp } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonList, IonSelect, IonSelectOption },
    setup() {
      return { caretDownSharp };
    },
  });
</script>

<style>
  ion-select.always-flip::part(icon) {
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ion-select.always-flip.select-expanded::part(icon) {
    transform: rotate(180deg);
  }

  ion-select.never-flip::part(icon) {
    transform: none;
  }
</style>
```
