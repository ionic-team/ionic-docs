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

<ion-button id="open-action-sheet">Open</ion-button>
<ion-action-sheet
  trigger="open-action-sheet"
  class="my-custom-class"
  header="Example header"
  sub-header="Example subheader"
></ion-action-sheet>

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
