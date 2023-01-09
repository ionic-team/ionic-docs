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
    <ion-button @click="setOpen(true)">Open</ion-button>
    <ion-action-sheet
      :is-open="isOpen"
      header="Example header"
      sub-header="Example subheader"
      :buttons="actionSheetButtons"
      @didDismiss="setOpen(false)"
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

      return {
        result,
        actionSheetButtons,
        setResult,
        isOpen,
        setOpen
      };
    },
  };
</script>
```
