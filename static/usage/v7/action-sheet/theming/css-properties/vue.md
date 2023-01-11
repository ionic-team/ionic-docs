```html
<style>
  ion-action-sheet.my-custom-class {
    --background: #f58840;
    --backdrop-opacity: 0.6;
    --button-background-selected: #e97223;
    --button-color: #000000;
    --color: #fff;
    /* role: "destructive" button iOS styling override */
    --ion-color-danger: #000000;
  }
</style>

<template>
  <ion-button id="open-action-sheet">Open</ion-button>
  <ion-action-sheet
    trigger="open-action-sheet"
    class="my-custom-class"
    header="Example header"
    sub-header="Example subheader"
    :buttons="actionSheetButtons"
  ></ion-action-sheet>
</template>

<script lang="ts">
  import { IonActionSheet, IonButton } from '@ionic/vue';

  export default {
    components: { IonActionSheet, IonButton },
    setup() {
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

      return { actionSheetButtons };
    },
  };
</script>
```
