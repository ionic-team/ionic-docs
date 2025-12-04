```html
<style>
  ion-modal#example-modal {
    --width: fit-content;
    --min-width: 250px;
    --height: fit-content;
    --border-radius: 6px;
    --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  }

  ion-modal#example-modal h1 {
    margin: 20px 20px 10px 20px;
  }

  ion-modal#example-modal ion-icon {
    margin-right: 6px;

    width: 48px;
    height: 48px;

    padding: 4px 0;

    color: #aaaaaa;
  }

  ion-modal#example-modal .wrapper {
    margin-bottom: 10px;
  }
</style>

<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-custom-dialog" expand="block">Open Custom Dialog</ion-button>

  <ion-modal id="example-modal" trigger="open-custom-dialog">
    <div class="wrapper">
      <h1>Dialog header</h1>

      <ion-list lines="none">
        <ion-item button="true" detail="false" onclick="dismiss()">
          <ion-icon name="person-circle"></ion-icon>
          <ion-label>Item 1</ion-label>
        </ion-item>
        <ion-item button="true" detail="false" onclick="dismiss()">
          <ion-icon name="person-circle"></ion-icon>
          <ion-label>Item 2</ion-label>
        </ion-item>
        <ion-item button="true" detail="false" onclick="dismiss()">
          <ion-icon name="person-circle"></ion-icon>
          <ion-label>Item 3</ion-label>
        </ion-item>
      </ion-list>
    </div>
  </ion-modal>
</ion-content>

<script>
  var modal = document.querySelector('ion-modal');
  function dismiss() {
    modal.dismiss();
  }
</script>
```
