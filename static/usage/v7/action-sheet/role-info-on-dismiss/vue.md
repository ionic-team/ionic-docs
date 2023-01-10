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
    <ion-button id="open-action-sheet">Open</ion-button>
    <ion-action-sheet
      trigger="open-action-sheet"
      header="Example header"
      sub-header="Example subheader"
      :buttons="actionSheetButtons"
      @didDismiss="setResult($event)"
    ></ion-action-sheet>

    <code>{{ result }}</code>
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { IonActionSheet, IonButton } from '@ionic/vue';

  export default {
    components: { IonActionSheet, IonButton },
    setup() {
      const result = ref('');
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

      const setResult = (ev: CustomEvent) => {
        result.value = JSON.stringify(ev.detail, null, 2);
      };

      return {
        result,
        actionSheetButtons,
        setResult
      };
    },
  };
</script>
```
