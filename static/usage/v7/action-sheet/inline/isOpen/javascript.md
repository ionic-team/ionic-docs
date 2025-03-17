```html
<ion-button onclick="actionSheet.isOpen = true">Open</ion-button>
<ion-action-sheet header="Actions"></ion-action-sheet>

<script>
  var actionSheet = document.querySelector('ion-action-sheet');

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

  actionSheet.addEventListener('ionActionSheetDidDismiss', (event) => {
    actionSheet.isOpen = false;
  });
</script>
```
