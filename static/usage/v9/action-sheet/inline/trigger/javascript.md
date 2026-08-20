```html
<ion-button id="open-action-sheet">Open</ion-button>
<ion-action-sheet trigger="open-action-sheet" header="Actions"></ion-action-sheet>

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
</script>
```
