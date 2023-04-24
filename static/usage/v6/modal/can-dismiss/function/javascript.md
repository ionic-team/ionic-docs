```html
<div class="ion-page">
  <ion-header>
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">Open</ion-button>

    <ion-modal trigger="open-modal" swipe-to-close="true">
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
          <ion-buttons slot="end">
            <ion-button onclick="dismiss()">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>You will be prompted when closing this modal.</p>
      </ion-content>
    </ion-modal>
  </ion-content>
</div>

<script>
  var modal = document.querySelector('ion-modal');

  modal.canDismiss = promptClose;
  modal.presentingElement = document.querySelector('.ion-page');

  function dismiss() {
    modal.dismiss();
  }

  async function promptClose() {
    const actionSheet = document.createElement('ion-action-sheet');

    actionSheet.header = 'Are you sure?';
    actionSheet.buttons = [
      {
        text: 'Yes',
        role: 'confirm',
      },
      {
        text: 'No',
        role: 'cancel',
      },
    ];
    document.body.appendChild(actionSheet);
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();

    return role === 'confirm';
  }
</script>
```
