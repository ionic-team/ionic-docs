import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'page-toast',
  styleUrl: 'toast.css'
})
export class PageToast {

  @Prop({ connect: 'ion-toast-controller ' }) toastCtrl: HTMLIonToastControllerElement;

  async showToast(position: 'top' | 'bottom' | 'middle') {
    const toast = await this.toastCtrl.create({
      message: 'Mmmm, buttered toast',
      duration: 2000,
      position
    });

    toast.present();
  }

  async showToastWithCloseButton() {
    const toast = await this.toastCtrl.create({
      message: 'Your files were successfully saved',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });

    toast.present();
  }

  async showLongToast() {
    const toast = await this.toastCtrl.create({
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
      duration: 2000,
    });

    toast.present();
  }

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Toast</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen padding>
        <ion-toast-controller></ion-toast-controller>

        <ion-button expand="block" onClick={() => this.showToast('top')}>Show Toast Top Position</ion-button>
        <ion-button expand="block" onClick={() => this.showToast('middle')}>Show Toast Middle Position</ion-button>
        <ion-button expand="block" onClick={() => this.showToast('bottom')}>Show Toast Bottom Position</ion-button>
        <ion-button expand="block" onClick={() => this.showLongToast()}>Show Long Toast</ion-button>
        <ion-button expand="block" onClick={() => this.showToastWithCloseButton()}>Show Toast W/ Close ion-button</ion-button>
      </ion-content>
    ];
  }
}
