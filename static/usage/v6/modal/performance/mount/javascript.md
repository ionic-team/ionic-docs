```html
<ion-header>
  <ion-toolbar>
    <ion-title>Example</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">Open Modal</ion-button>
  <ion-modal trigger="open-modal">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button id="close">Close</ion-button>
        </ion-buttons>
        <ion-title>Modal</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> This content was mounted as soon as the modal was created. </ion-content>
  </ion-modal>
</ion-content>

<script>
  var modal = document.querySelector('ion-modal');

  var closeBtn = document.querySelector('#close');
  closeBtn.addEventListener('click', () => close());

  var close = () => {
    modal.dismiss();
  };
</script>
```
