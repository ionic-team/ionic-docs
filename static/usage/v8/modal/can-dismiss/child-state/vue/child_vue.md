```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Modal</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="dismiss()">Close</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>
        <ion-checkbox @ionChange="checkboxChanged">
          Override Dismiss<br />
          <ion-note class="ion-text-wrap"
            >Toggle the checkbox to allow immediately dismissing the modal without a prompt.</ion-note
          >
        </ion-checkbox>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script setup lang="ts">
  import {
    IonButtons,
    IonButton,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonList,
    IonItem,
    IonCheckbox,
    IonNote,
  } from '@ionic/vue';

  const props = defineProps(['modal']);
  const emit = defineEmits(['dismissChange']);

  const dismiss = () => {
    props.modal.$el.dismiss();
  };

  const checkboxChanged = (event) => {
    const checked = event.detail.checked;
    emit('dismissChange', checked);
  };
</script>
```
