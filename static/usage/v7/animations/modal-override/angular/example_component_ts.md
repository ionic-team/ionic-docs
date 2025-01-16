```ts
import { Component, ViewChild } from '@angular/core';
import {
  AnimationController,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar],
})
export class ExampleComponent {
  @ViewChild('modal', { static: true }) modal!: IonModal;

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {
    const enterAnimation = (baseEl: HTMLElement) => {
      const root = baseEl.shadowRoot;

      const backdropElement = root?.querySelector('ion-backdrop');
      const wrapperElement = root?.querySelector('.modal-wrapper');

      const backdropAnimation = this.animationCtrl
        .create()
        .addElement(backdropElement || baseEl)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl.create();

      if (wrapperElement) {
        wrapperAnimation.addElement(wrapperElement).keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '0.99', transform: 'scale(1)' },
        ]);
      }

      return this.animationCtrl
        .create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    };

    const leaveAnimation = (baseEl: HTMLElement) => {
      return enterAnimation(baseEl).direction('reverse');
    };

    this.modal.enterAnimation = enterAnimation;
    this.modal.leaveAnimation = leaveAnimation;
  }

  closeModal() {
    this.modal.dismiss();
  }
}
```
