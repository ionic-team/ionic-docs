```html
<style>
  ion-action-sheet.custom-class {
    --background: #f58840;
    --backdrop-opacity: 0.6;
    --button-background-selected: #e97223;
    --button-color: #000000;
    --color: #eadede;
    --ion-color-danger: #fff;
  }
</style>

<template>
  <ion-button @click="presentActionSheet">Open</ion-button>
</template>

<script lang="ts">
  import { IonButton, actionSheetController } from '@ionic/vue';

  export default {
    components: { IonButton },
    methods: {
      async presentActionSheet() {
        const actionSheet = await actionSheetController.create({
          header: 'Example header',
          subHeader: 'Example subheader',
          cssClass: 'custom-class',
          buttons: [
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
          ],
        });

        actionSheet.present();
      },
    },
  };
</script>
```
