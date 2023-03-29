```html
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
          header: 'Actions',
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

        await actionSheet.present();
      };

      return { presentActionSheet };
    },
  };
</script>
```
