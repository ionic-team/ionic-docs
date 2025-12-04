```html
<ion-button onclick="presentActionSheet()">Open</ion-button>

<script>
  async function presentActionSheet() {
    const actionSheet = document.createElement('ion-action-sheet');
    actionSheet.header = 'Actions';
    actionSheet.buttons = [
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

    document.body.appendChild(actionSheet);
    await actionSheet.present();
  }
</script>
```
