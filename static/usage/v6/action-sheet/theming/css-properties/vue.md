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
  <ion-button @click="presentActionSheet">Open</ion-button>
</template>

<script lang="ts">
  import { IonButton, actionSheetController } from '@ionic/vue';

  export default {
    components: { IonButton },
    setup() {
      const presentActionSheet = async () => {
        const actionSheet = await actionSheetController.create({
          header: 'Example header',
          subHeader: 'Example subheader',
          cssClass: 'my-custom-class',
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
      };

      return { presentActionSheet };
    },
  };
</script>
```
