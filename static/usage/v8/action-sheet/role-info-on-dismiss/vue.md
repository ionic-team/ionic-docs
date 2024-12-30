```html
<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
  }
</style>

<template>
  <div class="container">
    <ion-button id="open-action-sheet">Open</ion-button>
    <ion-action-sheet
      trigger="open-action-sheet"
      header="Example header"
      sub-header="Example subheader"
      :buttons="actionSheetButtons"
      @didDismiss="logResult($event)"
    ></ion-action-sheet>
  </div>
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

      const logResult = (event: CustomEvent) => {
        console.log(JSON.stringify(event.detail, null, 2));
      };

      return {
        actionSheetButtons,
        logResult,
      };
    },
  };
</script>
```
