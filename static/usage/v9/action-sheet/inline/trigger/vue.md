```html
<template>
  <ion-button id="open-action-sheet">Open</ion-button>
  <ion-action-sheet trigger="open-action-sheet" header="Actions" :buttons="actionSheetButtons"></ion-action-sheet>
</template>

<script setup lang="ts">
  import { IonActionSheet, IonButton } from '@ionic/vue';

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
</script>
```
