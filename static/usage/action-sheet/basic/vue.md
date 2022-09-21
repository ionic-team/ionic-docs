```html
<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
  }

  code {
    white-space: pre-wrap;
  }
</style>

<template>
  <div class="container">
    <ion-button @click="presentActionSheet">Open</ion-button>
    <code>{{ result }}</code>
  </div>
</template>

<script lang="ts">
  import { IonButton, actionSheetController } from '@ionic/vue';

  export default {
    components: { IonButton },
    data() {
      return {
        result: '',
      };
    },
    methods: {
      async presentActionSheet() {
        const actionSheet = await actionSheetController.create({
          header: 'Example header',
          subHeader: 'Example subheader',
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

        const result = await actionSheet.onDidDismiss();
        this.result = JSON.stringify(result, null, 2);
      },
    },
  };
</script>
```
