```html
<ion-header>
  <ion-toolbar>
    <ion-title>Page</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="modal-trigger">Present Modal</ion-button>
  <ion-modal trigger="modal-trigger">
    <ion-header>
      <ion-toolbar>
        <ion-title>Modal</ion-title>
        <ion-buttons slot="end">
          <ion-button onclick="closeModal()">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding"> Modal Content </ion-content>
  </ion-modal>
</ion-content>

<script>
  const modal = document.querySelector('ion-modal');

  var closeModal = () => {
    modal.dismiss();
  };

  const enterAnimation = (baseEl) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = createAnimation()
      .addElement(root.querySelector('ion-backdrop'))
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(root.querySelector('.modal-wrapper'))
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const leaveAnimation = (baseEl) => {
    return enterAnimation(baseEl).direction('reverse');
  };

  modal.enterAnimation = enterAnimation;
  modal.leaveAnimation = leaveAnimation;
</script>
```
