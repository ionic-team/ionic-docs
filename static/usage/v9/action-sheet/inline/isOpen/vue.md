```html
<template>
  <ion-button @click="setOpen(true)">Open</ion-button>
  <ion-action-sheet
    :is-open="isOpen"
    header="Actions"
    :buttons="actionSheetButtons"
    @didDismiss="setOpen(false)"
  ></ion-action-sheet>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { IonActionSheet, IonButton } from '@ionic/vue';

  const isOpen = ref(false);
  const actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  const setOpen = (state: boolean) => {
    isOpen.value = state;
  };
</script>
```
