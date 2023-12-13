```html
<template>
  <ion-button id="open-modal">Open modal</ion-button>
  <ion-modal ref="modal" trigger="open-modal" is-open="true" initial-breakpoint="0.5" @didDismiss="onDidDismiss">
    <ion-content>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="modal.$el.dismiss(null, 'cancel')">Cancel</ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button @click="modal.$el.dismiss(currentValue, 'confirm')">Done</ion-button>
        </ion-buttons>
      </ion-toolbar>
      <ion-picker>
        <ion-picker-column :value="currentValue" @ionChange="onIonChange">
          <ion-picker-column-option value="" disabled="true">--</ion-picker-column-option>
          <ion-picker-column-option value="javascript">Javascript</ion-picker-column-option>
          <ion-picker-column-option value="typescript">Typescript</ion-picker-column-option>
          <ion-picker-column-option value="rust">Rust</ion-picker-column-option>
          <ion-picker-column-option value="c#">C#</ion-picker-column-option>
        </ion-picker-column>
      </ion-picker>
    </ion-content>
  </ion-modal>
</template>

<script setup lang="ts">
  import {
    IonModal,
    IonContent,
    IonToolbar,
    IonButtons,
    IonButton,
    IonPicker,
    IonPickerColumn,
    IonPickerColumnOption,
  } from '@ionic/vue';

  import { ref } from 'vue';

  let currentValue = 'javascript';

  const modal = ref(null);

  const onIonChange = (event: CustomEvent) => {
    currentValue = event.detail.value;
  };

  const onDidDismiss = (event: CustomEvent) => {
    console.log('didDismiss', JSON.stringify(event.detail));
  };
</script>
```
