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

<div class="container">
  <ion-button onclick="actionSheet.isOpen = true">Open</ion-button>
  <ion-action-sheet
    header="Example header"
    sub-header="Example subheader"
  ></ion-action-sheet>

  <code id="action"></code>
</div>

<script>
  const actionSheet = document.querySelector('ion-action-sheet');
  const action = document.getElementById('action');

  actionSheet.buttons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete'
      }
    },
    {
      text: 'Share',
      data: {
        action: 'share'
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel'
      }
    }
  ];

  actionSheet.addEventListener('ionActionSheetDidDismiss', (ev) => {
    actionSheet.isOpen = false;
    action.innerText = JSON.stringify(ev.detail, null, 2);
  });
</script>
```
