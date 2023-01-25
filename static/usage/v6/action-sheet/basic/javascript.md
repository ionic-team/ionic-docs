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
  <ion-button onclick="presentActionSheet()">Open</ion-button>
  <code id="action"></code>
</div>

<script>
  const action = document.getElementById('action');

  async function presentActionSheet() {
    const actionSheet = document.createElement('ion-action-sheet');
    actionSheet.header = 'Example header';
    actionSheet.subHeader = 'Example subheader';
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

    const result = await actionSheet.onDidDismiss();
    action.innerText = JSON.stringify(result, null, 2);
  }
</script>
```
